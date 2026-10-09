# Niket Talekar Portfolio

Portfolio website built with React, Vite, Tailwind CSS, and a Flask contact API.

## Requirements

- Node.js 18 or newer
- Python 3.10 or newer

## Local Development

Install frontend dependencies from the project root:

```powershell
npm install
```

In a second terminal, start the Flask API:

```powershell
cd backend
..\venv\Scripts\Activate.ps1
pip install -r requirements.txt
python app.py
```

If you have not created the virtual environment yet, run `py -m venv venv` from the project root and activate it with `..\venv\Scripts\Activate.ps1` from `backend`.

Start the frontend in the first terminal:

```powershell
npm run dev
```

Open the local Vite URL shown in that terminal. Vite forwards contact and health API requests to Flask on port 5000.

## Production Deployment

Deploy this repository to a platform that supports Python web services and lets you run a Node build command. The included `Procfile` starts Flask with Waitress; Flask serves both the built frontend and the contact API from the same origin.

Build command:

```sh
npm ci && npm run build && pip install -r backend/requirements.txt
```

Start command:

```sh
python backend/serve.py
```

Set `CONTACTS_DB_PATH` to a path on the platform's persistent disk, for example `/var/data/contacts.db`. Without a persistent disk, saved contact submissions may be lost when the service restarts or is redeployed.

To enable email notifications, copy `backend/.env.example` to `backend/.env` for local use, or configure these environment variables in the hosting platform: `SENDER_EMAIL`, `SENDER_PASSWORD`, and `CONTACT_RECIPIENT_EMAIL`. Never commit credentials. Email delivery is optional; contact submissions are still stored when email settings are omitted.

The service health check is available at `/api/health`.
