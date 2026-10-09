import os

from waitress import serve

from app import app, ensure_storage

if __name__ == "__main__":
    ensure_storage()
    serve(app, host="0.0.0.0", port=int(os.environ.get("PORT", "5000")))