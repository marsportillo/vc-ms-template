# vc-ms-template

`vc-ms-template` is a base microservice template for the **Virtual Construction** ecosystem.

It provides a minimal, opinionated setup with:

- Node.js + Express
- MongoDB integration
- Docker + docker-compose
- API-first structure (with `/health`, `/api`, `/api/logs`)
- Ready-to-use Postman collection

The goal is to speed up the creation of new VC microservices (e.g. `vc-telemetry`, `vc-sensor-registry`, `vc-dms`) and keep the architecture consistent across projects.

---

## ✅ Features

- Express app with JSON body parsing
- Centralized configuration (`src/config/`)
- MongoDB connection via `MONGO_URI`
- Example model (`Log.model.js`)
- Example controller + routes (`/api/logs`)
- Health endpoint for Docker/K8s (`/health`)
- Postman collection included

---

## 📁 Project structure

```text
src/
├── config/
│   └── mongoDBConnection.js
├── controllers/
│   └── log.controller.js
├── models/
│   └── Log.model.js
├── routes/
│   ├── index.routes.js
│   └── log.routes.js
└── server.js
docker-compose.yml
openapi.yaml
.env.example
vc-ms-template.postman_collection.json
```

---

## 🚀 Getting started

### 1. Install dependencies

```bash
npm install
```

### 2. Create your env file

```bash
cp .env.example .env
```

Edit `.env` if needed:

```env
PORT=8089
SERVICE_NAME=vc-ms-template
MONGO_URI=mongodb://localhost:27017/vc_ms_template
NODE_ENV=development
```

### 3. Run MongoDB (Docker)

```bash
docker compose up -d
```

> ⚠️ The template expects an external Docker network called `vc-net`.  
> If you don't have it yet:
> ```bash
> docker network create vc-net
> ```

### 4. Start the service

Development:

```bash
npm run dev
```

Docker:

```bash
docker compose up --build
```

---

## 📡 Available endpoints

### `GET /health`
Health check (used by Docker / gateway).

**Response**
```json
{
  "status": "ok",
  "service": "vc-ms-template",
  "timestamp": "2025-10-31T09:00:00.000Z"
}
```

---

### `GET /api`
Basic service info.

---

### `GET /api/logs`
Returns latest logs (up to 5).

---

### `POST /api/logs`
Create a test log entry.

**Example**
```bash
curl -X POST http://localhost:8089/api/logs   -H "Content-Type: application/json"   -d '{"message":"Testing vc-ms-template","level":"info"}'
```

---

## 🧪 Postman collection

A Postman collection is included:

- `postman/vc-ms-template.postman_collection.json`

Import it into Postman and hit **Health**, **Get Logs**, **Create Log**.

---

## 🐳 Docker

```bash
docker compose up --build
```

This will start:
- the API container (exposed on `8089` by default)
- the MongoDB container (exposed on `27029` by default)
- both attached to the external `vc-net` network

If you already have other VC services (built-environment, dms, telemetry), this template will align with them.

---

## 🧠 AI usage disclaimer

This repository is being developed with the support of **AI-assisted coding** tools (ChatGPT / code generation).  
The generated code is reviewed and adapted to the Virtual Construction architecture.  
If you want to contribute, please **review PRs carefully**, especially for:
- security (Express / Mongo injection / input validation)
- error handling
- API consistency with the rest of the VC stack

> ⚠️ The purpose of these repositories is purely educational and experimental,  
> aimed at exploring architectures, interoperability and integration patterns  
> within the Virtual Construction ecosystem.

---

## 🛠 Next steps (when cloning this template)

1. Rename the service in `.env` (`SERVICE_NAME=vc-telemetry`)
2. Change exposed port (`EXPOSED_PORT=8082` in `docker-compose.yml` or `.env`)
3. Replace `/api/logs` with your actual domain route (`/api/telemetry`, `/api/dictionary`, …)
4. Update `openapi.yaml` accordingly

---

## 📄 License

Licensed under the [Apache License 2.0](https://www.apache.org/licenses/LICENSE-2.0).
