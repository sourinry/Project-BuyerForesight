# User Management API

A clean and modular REST API built using Node.js (Express) for managing users.
This project demonstrates clean architecture, validation, error handling, and flexible data storage (in-memory and JSON file).

---

## Features

* CRUD Operations (Create, Read, Update, Delete)
* Search users (`?search=`)
* Sort users (`?sort=name&order=asc`)
* Clean Architecture (Controller → Service → Repository)
* Switchable Data Storage:

  * In-memory (Array)
  * JSON file (Persistent)
* Validation using Joi
* Centralized Error Handling
* ES Modules (Modern JavaScript)

---

## Project Structure

```
src/
├── config/
├── controllers/
├── services/
├── repositories/
├── routes/
├── middlewares/
├── validators/
├── utils/
└── app.js

data/
└── users.json

index.js
```

---

## Setup & Run

### Clone the repository

```bash
git clone https://github.com/sourinry/Project-BuyerForesight.git
cd Project-BuyerForesight
```

### Install dependencies

```bash
npm install
```

### Environment Variables

Create a `.env` file in the root directory:

```env
PORT=3000
DB_TYPE=memory
```

You can also use:

```bash
cp .env.example .env
```

Configuration options:

* `memory` → In-memory storage
* `file` → JSON file storage

---

### Run the server

```bash
npm start
```

For development:

```bash
npm run dev
```

---

## Base URL

```
http://localhost:3000/api/v1/user
```

---

## API Endpoints

### Create User

```
POST /api/v1/user
```

**Body:**

```json
{
  "name": "Sourin",
  "email": "sourin@gmail.com"
}
```

---

### Get All Users

```
GET /api/v1/user
```

---

### Search Users

```
GET /api/v1/user?search=sou
```

---

### Sort Users

```
GET /api/v1/user?sort=name&order=asc
```

---

### Get User by ID

```
GET /api/v1/user/:id
```

---

### Update User

```
PUT /api/v1/user/:id
```

---

### Delete User

```
DELETE /api/v1/user/:id
```

---

## Validation

* Implemented using Joi
* Applied at middleware level
* Ensures invalid data does not reach business logic

Example rules:

* `name` → required, minimum 3 characters
* `email` → must be a valid email format

---

## Error Handling

* Centralized error handling middleware
* Custom error class (`AppError`)
* Proper HTTP status codes (400, 404, 500)

---

## Data Handling

This project supports two storage mechanisms:

| Type      | Description                              |
| --------- | ---------------------------------------- |
| In-Memory | Fast, temporary (data lost on restart)   |
| JSON File | Persistent storage in `/data/users.json` |

Switch using `.env`:

```
DB_TYPE=memory
DB_TYPE=file
```

---

## Architecture

```
Request
  ↓
Validation (Middleware)
  ↓
Controller
  ↓
Service (Business Logic)
  ↓
Repository (Data Layer)
  ↓
Response
```

---

## Assumptions

* No authentication required
* Unique ID generated internally
* Basic validation implemented using Joi
* No database used (as per assignment requirement)

---

## Author

Sourin Roy
GitHub: https://github.com/sourinry

---

## Notes

This project was built as part of an assignment to evaluate:

* API Design
* Data Handling
* Clean Architecture
* Error Handling

---

## Status

Ready for submission
Interview-ready
Follows best practices
