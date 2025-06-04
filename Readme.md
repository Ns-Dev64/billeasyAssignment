#  Book Review API

A RESTful API for a Book Review system built using **Node.js**, **Express**, **MongoDB**, and **JWT** authentication.

---

##  Features

- User signup and login with hashed passwords
- JWT-based authentication
- Create, read, update, and delete reviews (only one review per user per book)
- Add and view books with optional filtering and pagination
- Search books by title or author (partial & case-insensitive)
- Clean, modular code with environment-based configuration

---

##  Tech Stack

- **Backend:** Node.js, Express.js
- **Database:** MongoDB, Mongoose
- **Authentication:** JWT
- **Environment Management:** dotenv

---

##  Project Structure
```
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
```
---

##  Setup Instructions

### 1. Clone the Repository

```
git clone https://github.com/Ns-Dev64/billeasyAssignment
cd billeasyAssignment
npm install
```

### 2. Create a .env file
```
PORT=5001
MONGO_URI=mongodb://localhost:27017/bookreview
JWT_SECRET=your_jwt_secret_key
```

### 3. Run the server

For production: ```npm start```

For development: ```npm run dev```


##  API Endpoints

> Base URL: `http://localhost:5001/api`

---

###  Authentication

| Method | Endpoint       | Description         | Auth |
|--------|----------------|---------------------|------|
| POST   | `/auth/signup` | Register new user   | ❌   |
| POST   | `/auth/login`  | Login and get token | ❌   |

---

###  Books

| Method | Endpoint            | Description                             | Auth |
|--------|---------------------|-----------------------------------------|------|
| POST   | `/books`            | Add a new book                          | ✅   |
| GET    | `/books`            | Get all books (filters + pagination)    | ❌   |
| GET    | `/books/:id`        | Get book by ID with reviews + avgRating | ❌   |
| GET    | `/books/search?q=`  | Search books by title or author         | ❌   |

**Optional Query Parameters for `/books`:**
- `page` (default: 1)
- `limit` (default: 10)
- `author`
- `genre`

---

###  Reviews

| Method | Endpoint                    | Description                | Auth |
|--------|-----------------------------|----------------------------|------|
| POST   | `/books/:id/reviews`        | Add review (one per user)  | ✅   |
| PUT    | `/reviews/:id`              | Update your review         | ✅   |
| DELETE | `/reviews/:id`              | Delete your review         | ✅   |

---

##  Example API Requests

###  Signup
```
curl -X POST http://localhost:3000/api/auth/signup \
  -H "Content-Type: application/json" \
  -d '{"username": "testuser", "password": "123456"}'
```

### Login
```
curl -X POST http://localhost:3000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"username": "testuser", "password": "123456"}'
```

### Add a book (authenticated)
```
curl -X POST http://localhost:3000/api/books \
  -H "Authorization: Bearer <your_token>" \
  -H "Content-Type: application/json" \
  -d '{"title": "The Hobbit", "author": "J.R.R. Tolkien", "genre": "Fantasy"}'
```

### Get all books
```
curl -X GET "http://localhost:3000/api/books?page=1&limit=5&author=tolkien"
```

### Search Books
```
curl -X GET "http://localhost:3000/api/books/search?q=tolkien"
```


### Get book by Id
```
curl -X GET http://localhost:3000/api/books/<bookId>
```

### Add a review (authenticated)
```
curl -X POST http://localhost:3000/api/books/<bookId>/reviews \
  -H "Authorization: Bearer <your_token>" \
  -H "Content-Type: application/json" \
  -d '{"rating": 5, "comment": "Great read!"}'
```

### Update review 
```
curl -X PUT http://localhost:3000/api/reviews/<reviewId> \
  -H "Authorization: Bearer <your_token>" \
  -H "Content-Type: application/json" \
  -d '{"rating": 4, "comment": "Changed my mind"}'
```

### Delete review
```
curl -X DELETE http://localhost:3000/api/reviews/<reviewId> \
  -H "Authorization: Bearer <your_token>"
```

# Database Schema(Mongoose)

## User
```
{
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true } // hashed
}
```

## Book
```
{
  title: { type: String },
  author: { type: String },
  genre: { type: String },
  createdAt: Date,
  updatedAt: Date
}
```

## Review
```
{
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  book: { type: mongoose.Schema.Types.ObjectId, ref: 'Book' },
  rating: { type: Number }, // 1-5
  comment: { type: String },
  createdAt: Date,
  updatedAt: Date
}
```
