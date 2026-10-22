# Zero Hunger (SDG 02) Platform

An application that helps communities coordinate surplus food donations and
requests. The frontend is React with JavaScript; the REST API is Spring Boot
with Java 17 and Maven; MySQL stores submitted donations and requests.

## Technology requirements

| Area | Technology |
|---|---|
| Operating system | Windows 10/11, Linux, or macOS |
| Frontend | React 19, JavaScript, HTML5, and CSS3 |
| Frontend build tool | Vite |
| Backend | Spring Boot 3 and Java 17 or later |
| Database | MySQL 8 or later |
| Database connectivity | MySQL Connector/J through Spring Data JPA |
| Build tool | Maven 3.9 or later |
| Development environment | Visual Studio Code, IntelliJ IDEA, or Eclipse |
| Mapping | React Leaflet and OpenStreetMap |
| Web browser | Google Chrome, Microsoft Edge, or Mozilla Firefox |
| Version control | Git and GitHub |
| Java version | JDK 17 or later |
| Node.js | Node.js and npm for React development |

## Features

- `/` — project landing page and impact information
- `/donate` — submit a food donation
- `/request` — submit a food request
- `/locator` — locate food banks
- `/dashboard/ngo` — NGO dashboard
- `/risk-map` — hunger risk map
- `/nutrition-advisor` — sample nutrition planner

Donation and food-request submissions are sent to the Spring Boot API and
persisted in MySQL. Map locations, NGO and food-bank listings, dashboard
analytics, matching examples, and nutrition plans currently use demo/sample
data.

## Prerequisites

- Node.js 18.18 or later and npm
- JDK 17 or later
- Maven 3.9 or later
- MySQL 8 or later, running locally or reachable from the backend

## Database setup

Create the application database in MySQL:

```sql
CREATE DATABASE zero_hunger;
```

The backend reads its connection details from environment variables:

| Variable | Default |
|---|---|
| `DB_URL` | `jdbc:mysql://localhost:3306/zero_hunger?useSSL=false&allowPublicKeyRetrieval=true&serverTimezone=UTC` |
| `DB_USERNAME` | Empty; set this to a MySQL user |
| `DB_PASSWORD` | Empty; set this to that user's password |
| `PORT` | `8080` |
| `JPA_DDL_AUTO` | `update` |

Set `DB_USERNAME` and `DB_PASSWORD` in the environment used to launch the
backend. Do not put real credentials in source control.

## Run the backend

From the project root, in PowerShell:

```powershell
$env:DB_USERNAME = "your-mysql-user"
$env:DB_PASSWORD = "your-mysql-password"
Set-Location backend
mvn spring-boot:run
```

The API is available at `http://localhost:8080`. Both resources support:

- `GET /api/donations` and `GET /api/requests` to list records
- `POST /api/donations` and `POST /api/requests` to create records
- `GET /api/{resource}/{id}`, `PUT /api/{resource}/{id}`, and
  `DELETE /api/{resource}/{id}` to read, update, or remove a record

Run backend tests from `backend` with `mvn test`.

## Run the frontend

In a second terminal at the project root:

```powershell
npm install
npm run dev
```

Open the Vite address printed in the terminal (normally
`http://localhost:5173`). Vite proxies `/api` requests to the backend on port
`8080`, so start MySQL and the backend before submitting a donation or request.
If either service is unavailable, the form displays an error instead of
reporting a successful save.

For deployments outside Vite's development/preview server, configure the web
server or reverse proxy to forward `/api` requests to the Spring Boot service.
