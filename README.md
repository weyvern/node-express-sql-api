# Install

- Fork project
- Clone your fork:

```bash
git clone <link-to-project>
cd <project-directory>/
npm install
```

# Environment

Create a .env file with a PG_CONN variable, it has to be a valid PostgreSQL connection string.

# Commands

## Dev

Dev commands runs app with nodemon

```bash
npm run dev
```

## Start

Start commands runs app with Node

```bash
npm start
```

# Users table

The API assumes a table called **users** exists in the database with the following structure:

```sql
CREATE TABLE users (
   id  SERIAL PRIMARY KEY,
   first_name varchar(255),
   last_name varchar(255),
   age int,
   active BOOLEAN NOT NULL DEFAULT true
);
```

# API routes and methods

- GET /users [x]
- GET /users/:id [x]
- POST /users []
- PUT /users/:id []
- DEL /users/:id []
