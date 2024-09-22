
# Thapa MERN App

A simple full-stack application built using the MERN stack (MongoDB, Express.js, React.js, and Node.js).

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Folder Structure](#folder-structure)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)

## Introduction

This is a basic full-stack web application that demonstrates the use of the MERN (MongoDB, Express.js, React.js, Node.js) stack. The application implements a simple CRUD (Create, Read, Update, Delete) functionality for managing items (such as users, tasks, products, etc.).

## Features

- Full-stack implementation with React (frontend) and Node.js + Express (backend).
- MongoDB for storing data.
- RESTful API with CRUD operations.
- Simple and clean user interface with React.
- Basic error handling and validation.

## Prerequisites

Before running the app, ensure that you have the following installed on your machine:

- [Node.js](https://nodejs.org/) (v14 or later)
- [MongoDB](https://www.mongodb.com/) (locally or on a cloud service like MongoDB Atlas)
- npm or yarn (Node package manager)

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/Cybersayak/Thapa--MERN.git
   cd Thapa--MERN
   ```

2. **Install dependencies:**

   Install both backend and frontend dependencies:

   - Backend (Node.js + Express):

     ```bash
     cd server
     npm install
     ```

   - Frontend (React):

     ```bash
     cd client
     npm install
     ```

3. **Set up environment variables:**

   Create a `.env` file in the `backend` directory and add the following:

   ```
   MONGO_URI=your_mongodb_connection_string
   PORT=5000
   ```

4. **Run the application:**

   - Start the backend (Node.js server):

     ```bash
     cd server
     npm start
     ```

   - Start the frontend (React app):

     ```bash
     cd client
     npm start
     ```

   The React app will run on [http://localhost:3000](http://localhost:3000) and the Node.js server will run on [http://localhost:5000](http://localhost:5000).

## Usage

- After running both the frontend and backend, open your browser and navigate to [http://localhost:3000](http://localhost:3000) to access the app.
- Perform basic CRUD operations through the UI, which communicates with the backend via RESTful APIs.

## Folder Structure

```
Thapa--MERN/
│
├── /server                 # Node.js + Express.js (Backend)
│   ├── models/              # Mongoose models
│   ├── routes/              # API routes
│   ├── controllers/         # Route handlers (controllers)
│   ├── config/              # Database configuration
│   └── server.js            # Entry point for the backend
│
└── client/                # React.js (Frontend)
    ├── public/              # Public assets
    └── src/                 # React components and logic
        ├── components/      # Reusable components
        ├── pages/           # Page-level components
        └── App.js           # Main React app
```

## Technologies Used

- **Frontend:**
  - React.js
  - Axios (for making HTTP requests)
  - React Router (for navigation)

- **Backend:**
  - Node.js
  - Express.js
  - MongoDB + Mongoose (for database management)
  - dotenv (for environment variables)

- **Database:**
  - MongoDB (NoSQL database)

## Contributing

Contributions are welcome! If you would like to contribute to this project, feel free to fork the repository and submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

---

This `README.md` covers the basic setup, installation, usage, and project structure for a MERN stack app.
