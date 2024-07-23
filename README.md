# Task Management Application

## Project Goals

The primary goal of this project is to develop a task management application that enables users to create, read, update, and delete tasks. Additionally, it supports task sharing among users within an organization, and each task update triggers notifications with account information and timestamps.

## Tech Stack

- **Front-End:**
  - React
  - Axios
  - React Router
  - Bootstrap or TailwindCSS

- **Back-End:**
  - Node.js
  - Express
  - MongoDB
  - Mongoose

## Project Structure

```
task-management-app/
│
├── client/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   └── Navbar.js
│   │   ├── pages/
│   │   │   ├── Home.js
│   │   │   ├── Task.js
│   │   │   ├── CreateEditTask.js
│   │   │   ├── Login.js
│   │   │   └── Register.js
│   │   ├── App.js
│   │   └── index.js
│   ├── .env
│   ├── package.json
│   └── README.md
│
└── server/
    ├── controllers/
    │   ├── authController.js
    │   └── taskController.js
    ├── middleware/
    │   └── auth.js
    ├── models/
    │   ├── Task.js
    │   └── User.js
    ├── routes/
    │   ├── auth.js
    │   └── tasks.js
    ├── .env
    ├── index.js
    ├── package.json
    └── README.md
```

## Basic Information

- **User Authentication:**
  - Secure user authentication with JWT.
  - Role-based access control.

- **Task Management:**
  - Create, read, update, and delete tasks.
  - Task attributes include title, description, due date, priority, and status.

- **Task Sharing:**
  - Real-time collaboration with task sharing.
  - Assign tasks to specific users.

- **Notifications:**
  - Task updates trigger notifications with account information and timestamps.

## Setup Instructions

### Backend

1. Navigate to the `server` directory:
   ```bash
   cd server
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file and add your MongoDB URI and JWT secret:
   ```env
   MONGO_URI=your_mongo_uri
   JWT_SECRET=your_jwt_secret
   ```
4. Run the server:
   ```bash
   npm run server
   ```

### Frontend

1. Navigate to the `client` directory:
   ```bash
   cd client
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the React app:
   ```bash
   npm start
   ```

## Contact

For questions or feedback, please contact Tanisha.

---

This README provides a concise overview of the project's goals, tech stack, structure, basic information, and setup instructions. 