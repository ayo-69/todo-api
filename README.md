# Todo API

A secure and simple Todo API built with Node.js and Express, featuring user authentication and full CRUD functionality. Each user's data is protected using JWT-based authentication, with PostgreSQL handling persistent storage.

## 🚀 Features

- 🔐 **Authentication**
  - User registration and login
  - Password hashing using `bcrypt`
  - Secure JWT-based authentication

- 📋 **Todo Management**
  - Create, Read, Update, Delete todos
  - Todos are user-specific
  - Includes timestamps and status fields

- 🛠️ **Tech Stack**
  - **Node.js** with **Express**
  - **PostgreSQL** for data persistence
  - **bcrypt** for hashing passwords
  - **jsonwebtoken** for handling auth tokens
  - **dotenv** for environment variable management

## 📦 Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- PostgreSQL
- Git

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/ayo-69/todo-api.git
   cd todo-api
   ````
   2. **Install dependencies**

``` bash
npm install
````

3. **Configure environment variables**

Create a .env file in the root of the project with the following structure:

``` bash
PORT=3000
DATABASE_URL=postgres://username:password@localhost:5432/your_db_name
JWT_SECRET=your_jwt_secret
````

4. **Set up the database**

- Create your PostgreSQL database using your preferred tool.

- Run SQL migrations if needed (or define tables manually based on the project).

5. **Start the server**

``` shell
npm start
````

The API should now be running on http://localhost:3000.



## 📁 Project Structure

├── controllers      # Logic for handling auth and todo requests
├── middleware       # JWT authentication middleware
├── models           # Query logic for users and todos
├── routes           # Route definitions (modularized)
├── .env             # Environment variables (not committed)
├── app.js           # Express app config
└── server.js        # Entry point

## ✅ TODOs

[x] User authentication

[x] Todo CRUD operations

[ ] Unit & integration tests

[ ] Dockerize the app


## 🤝 Contributing

Contributions are welcome! If you find bugs or have feature requests, feel free to open an issue or PR.

## 📝 License

Licensed under the MIT License.
