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

### Separate Vercel frontend and Render backend

For a Vercel frontend and Render API:

1. On Render, create a Web Service from this repository with `backend` as the root directory, `pip install -r requirements.txt` as the build command, and `python serve.py` as the start command.
2. On Vercel, import the repository as a Vite project. Use `npm run build` as the build command and `dist` as the output directory.
3. Set `VITE_API_BASE_URL` in Vercel to the Render service URL (for example, `https://niket-talekar.onrender.com`) and redeploy the frontend. The supplied Render URL is also the production default if this variable is unset.
4. The backend allows the production Vercel origin `https://niket-talekar-portfolio.vercel.app` by default. If your frontend uses a different domain, set `CORS_ALLOWED_ORIGINS` on Render to the allowed origin or comma-separated origins, then redeploy the backend.

Set `CONTACTS_DB_PATH` on Render to a path on a persistent disk, for example `/var/data/contacts.db`. Without a persistent disk, saved contact submissions may be lost when the service restarts or is redeployed.

The backend health check is available at `/api/health` on the Render service URL.

### Single-service deployment

Alternatively, deploy this repository to a platform that supports both a Node build and Python web service. The included `Procfile` starts Flask with Waitress, and Flask serves the built frontend and contact API from the same origin.

Build command:

```sh
npm ci && npm run build && pip install -r backend/requirements.txt
```

Start command:

```sh
python backend/serve.py
```

For a single-service deployment, leave `VITE_API_BASE_URL` unset so the frontend uses the same origin for API requests.

To enable email notifications, copy `backend/.env.example` to `backend/.env` for local use, or configure these environment variables in the hosting platform: `SENDER_EMAIL`, `SENDER_PASSWORD`, and `CONTACT_RECIPIENT_EMAIL`. Never commit credentials. Email delivery is optional; contact submissions are still stored when email settings are omitted.
