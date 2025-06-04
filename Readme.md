# 📚 Book Review API

A RESTful API for a Book Review system built using **Node.js**, **Express**, **MongoDB**, and **JWT** authentication.

---

## 🚀 Features

- User signup and login with hashed passwords
- JWT-based authentication
- Create, read, update, and delete reviews (only one review per user per book)
- Add and view books with optional filtering and pagination
- Search books by title or author (partial & case-insensitive)
- Clean, modular code with environment-based configuration

---

## 🧰 Tech Stack

- **Backend:** Node.js, Express.js
- **Database:** MongoDB, Mongoose
- **Authentication:** JWT
- **Environment Management:** dotenv

---

## 📁 Project Structure

book-review-api/
├── controllers/ # Route logic (Auth, Books, Reviews)
├── models/ # Mongoose schemas
├── routes/ # API route definitions
├── middleware/ # Authentication middleware
├── .env # Environment variables
├── app.js # Main app setup
├── server.js # Server entry point
├── package.json
└── README.md

---

## ⚙️ Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/Ns-Dev64/billeasyAssignment
cd billeasyAssignment
npm install
```

### 2. Create a .env file

PORT=5001
MONGO_URI=mongodb://localhost:27017/bookreview
JWT_SECRET=your_jwt_secret_key


### 3. Run the server

For production: npm start

For development: npm run dev


