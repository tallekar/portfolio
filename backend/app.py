from __future__ import annotations

import json
import os
import re
import smtplib
import sqlite3
from datetime import datetime, timezone
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText
from pathlib import Path

from flask import Flask, jsonify, request, send_from_directory

BASE_DIR = Path(__file__).resolve().parent
DATA_DIR = BASE_DIR / "data"
FRONTEND_DIR = BASE_DIR.parent / "dist"
LEGACY_CONTACTS_FILE = DATA_DIR / "contacts.json"
ENV_FILE = BASE_DIR / ".env"
EMAIL_REGEX = re.compile(r"^[^@\s]+@[^@\s]+\.[^@\s]+$")
MAX_NAME_LENGTH = 120
MAX_EMAIL_LENGTH = 254
MAX_MESSAGE_LENGTH = 5000
app = Flask(__name__)
app.config["MAX_CONTENT_LENGTH"] = 32 * 1024


def load_env_file() -> None:
    if not ENV_FILE.exists():
        return
    for raw_line in ENV_FILE.read_text(encoding="utf-8").splitlines():
        line = raw_line.strip()
        if not line or line.startswith("#") or "=" not in line:
            continue
        key, value = line.split("=", 1)
        os.environ.setdefault(key.strip(), value.strip().strip('"').strip("'"))


load_env_file()
DATABASE_FILE = Path(os.environ.get("CONTACTS_DB_PATH", DATA_DIR / "contacts.db")).expanduser().resolve()
CORS_ALLOWED_ORIGINS = {
    origin.strip()
    for origin in os.environ.get(
        "CORS_ALLOWED_ORIGINS",
        "https://niket-talekar-portfolio.vercel.app",
    ).split(",")
    if origin.strip()
}


@app.after_request
def add_cors_headers(response):
    origin = request.headers.get("Origin")
    if origin in CORS_ALLOWED_ORIGINS:
        response.headers["Access-Control-Allow-Origin"] = origin
        response.headers["Access-Control-Allow-Methods"] = "GET, POST, OPTIONS"
        response.headers["Access-Control-Allow-Headers"] = "Content-Type"
        response.headers["Access-Control-Max-Age"] = "600"
        response.vary.add("Origin")
    return response


def ensure_storage() -> None:
    DATABASE_FILE.parent.mkdir(parents=True, exist_ok=True)
    with sqlite3.connect(DATABASE_FILE) as connection:
        connection.execute("CREATE TABLE IF NOT EXISTS contacts (id INTEGER PRIMARY KEY, name TEXT NOT NULL, email TEXT NOT NULL, message TEXT NOT NULL, created_at TEXT NOT NULL)")
        if connection.execute("SELECT COUNT(*) FROM contacts").fetchone()[0] == 0:
            try:
                legacy_contacts = json.loads(LEGACY_CONTACTS_FILE.read_text(encoding="utf-8"))
            except (FileNotFoundError, json.JSONDecodeError):
                legacy_contacts = []
            if isinstance(legacy_contacts, list):
                connection.executemany(
                    "INSERT INTO contacts (name, email, message, created_at) VALUES (?, ?, ?, ?)",
                    [
                        (
                            str(item.get("name", "")).strip(),
                            str(item.get("email", "")).strip(),
                            str(item.get("message", "")).strip(),
                            str(item.get("created_at", "")).strip(),
                        )
                        for item in legacy_contacts
                        if isinstance(item, dict)
                    ],
                )
        connection.commit()


def validate_contact(payload: dict) -> dict[str, str]:
    errors: dict[str, str] = {}
    name = payload.get("name", "")
    email = payload.get("email", "")
    message = payload.get("message", "")
    name = name.strip() if isinstance(name, str) else ""
    email = email.strip() if isinstance(email, str) else ""
    message = message.strip() if isinstance(message, str) else ""
    if not name:
        errors["name"] = "Name is required."
    elif len(name) < 2:
        errors["name"] = "Name must be at least 2 characters long."
    elif len(name) > MAX_NAME_LENGTH:
        errors["name"] = f"Name must be {MAX_NAME_LENGTH} characters or fewer."
    if not email:
        errors["email"] = "Email is required."
    elif len(email) > MAX_EMAIL_LENGTH:
        errors["email"] = f"Email must be {MAX_EMAIL_LENGTH} characters or fewer."
    elif not EMAIL_REGEX.match(email):
        errors["email"] = "Enter a valid email address."
    if not message:
        errors["message"] = "Message is required."
    elif len(message) < 10:
        errors["message"] = "Message must be at least 10 characters long."
    elif len(message) > MAX_MESSAGE_LENGTH:
        errors["message"] = f"Message must be {MAX_MESSAGE_LENGTH} characters or fewer."
    return errors


def insert_contact(contact: dict) -> int:
    ensure_storage()
    with sqlite3.connect(DATABASE_FILE) as connection:
        cursor = connection.execute(
            "INSERT INTO contacts (name, email, message, created_at) VALUES (?, ?, ?, ?)",
            (contact["name"], contact["email"], contact["message"], contact["created_at"]),
        )
        connection.commit()
        return int(cursor.lastrowid)


def send_email(name: str, email: str, message: str) -> bool:
    sender_password = os.environ.get("SENDER_PASSWORD", "")
    if not sender_password:
        return False
    try:
        sender_email = os.environ.get("SENDER_EMAIL", "nikettalekar@gmail.com")
        recipient_email = os.environ.get("CONTACT_RECIPIENT_EMAIL", "nikettalekar@gmail.com")
        mail = MIMEMultipart("alternative")
        mail["Subject"] = f"New Contact Form Submission from {name}"
        mail["From"] = sender_email
        mail["To"] = recipient_email
        mail["Reply-To"] = email
        mail.attach(MIMEText(f"Name: {name}\nEmail: {email}\n\n{message}", "plain"))
        with smtplib.SMTP(
            os.environ.get("SMTP_SERVER", "smtp.gmail.com"),
            int(os.environ.get("SMTP_PORT", "587")),
            timeout=10,
        ) as server:
            server.starttls()
            server.login(sender_email, sender_password)
            server.sendmail(sender_email, mail["To"], mail.as_string())
        return True
    except (OSError, smtplib.SMTPException, ValueError):
        app.logger.exception("Unable to send contact notification email.")
        return False


@app.get("/")
def index():
    if not (FRONTEND_DIR / "index.html").is_file():
        return jsonify({"success": False, "message": "Frontend build not found. Run npm run build."}), 503
    return send_from_directory(FRONTEND_DIR, "index.html")


@app.get("/api/health")
def health() -> tuple:
    return jsonify({"success": True, "message": "Portfolio API is running."}), 200


@app.errorhandler(413)
def request_too_large(_error):
    return jsonify({"success": False, "message": "Request body is too large."}), 413


@app.get("/assets/<path:filename>")
def frontend_assets(filename: str):
    return send_from_directory(FRONTEND_DIR / "assets", filename)


@app.post("/contact")
def contact() -> tuple:
    payload = request.get_json(silent=True)
    if not isinstance(payload, dict):
        return jsonify({"success": False, "message": "Request body must be valid JSON."}), 400
    errors = validate_contact(payload)
    if errors:
        return jsonify({"success": False, "message": "Validation failed.", "errors": errors}), 400
    entry = {"name": payload["name"].strip(), "email": payload["email"].strip(), "message": payload["message"].strip(), "created_at": datetime.now(tz=timezone.utc).isoformat()}
    entry["id"] = insert_contact(entry)
    email_sent = send_email(entry["name"], entry["email"], entry["message"])
    response_message = "Email sent successfully." if email_sent else "Contact saved, but email could not be sent."
    return jsonify({"success": True, "message": response_message, "email_sent": email_sent, "data": entry}), 201


if __name__ == "__main__":
    ensure_storage()
    app.run(host="0.0.0.0", port=int(os.environ.get("PORT", "5000")), debug=False)
