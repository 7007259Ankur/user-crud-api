# User CRUD API

A simple RESTful API for managing users with basic CRUD (Create, Read, Update, Delete) operations. Built with Node.js and Express, this API allows you to store and manage user data in an in-memory array.

## Features
- **Create a User**: Add a new user with name, email, and age.
- **Retrieve All Users**: Fetch a list of all users.
- **Retrieve a Single User**: Get details of a specific user by ID.
- **Update a User**: Modify user details using their ID.
- **Delete a User**: Remove a user from the database using their ID.

## Technologies Used
- **Node.js**: A JavaScript runtime for building scalable server-side applications.
- **Express**: A fast and minimalist web framework for Node.js.
- **UUID**: A library for generating unique IDs for users.
- **Postman**: For testing API endpoints.

## Setup Instructions

### Prerequisites
- **Node.js** installed on your machine. Download it from [here](https://nodejs.org/).
- **npm** (Node Package Manager) comes bundled with Node.js.

### Installation
1. **Clone the repository:**
   ```sh
   git clone https://github.com/your-username/user-crud-api.git
   ```
2. **Navigate to the project directory:**
   ```sh
   cd user-crud-api
   ```
3. **Install dependencies:**
   ```sh
   npm install
   ```

### Running the Server
- **Start the server:**
  ```sh
  npm start
  ```
- **For development with hot-reloading:**
  ```sh
  npm run dev
  ```
- The server will start on `http://localhost:3000`.

## API Endpoints

### 1. Create a User
**Method:** POST  
**URL:** `/api/users`

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "age": 30
}
```
**Response:**
```json
{
  "id": "unique-id",
  "name": "John Doe",
  "email": "john@example.com",
  "age": 30
}
```

### 2. Get All Users
**Method:** GET  
**URL:** `/api/users`

**Response:**
```json
[
  {
    "id": "unique-id",
    "name": "John Doe",
    "email": "john@example.com",
    "age": 30
  }
]
```

### 3. Get a Single User
**Method:** GET  
**URL:** `/api/users/:id`

**Response:**
```json
{
  "id": "unique-id",
  "name": "John Doe",
  "email": "john@example.com",
  "age": 30
}
```

### 4. Update a User
**Method:** PUT  
**URL:** `/api/users/:id`

**Request Body:**
```json
{
  "name": "Jane Doe",
  "email": "jane@example.com",
  "age": 25
}
```
**Response:**
```json
{
  "id": "unique-id",
  "name": "Jane Doe",
  "email": "jane@example.com",
  "age": 25
}
```

### 5. Delete a User
**Method:** DELETE  
**URL:** `/api/users/:id`

**Response:**
```
204 No Content
```

## Sample Requests and Responses

### Create a User
**Request:**
```sh
curl -X POST http://localhost:3000/api/users \
  -H "Content-Type: application/json" \
  -d '{"name": "John Doe", "email": "john@example.com", "age": 30}'
```
**Response:**
```json
{
  "id": "unique-id",
  "name": "John Doe",
  "email": "john@example.com",
  "age": 30
}
```

### Get All Users
**Request:**
```sh
curl -X GET http://localhost:3000/api/users
```
**Response:**
```json
[
  {
    "id": "unique-id",
    "name": "John Doe",
    "email": "john@example.com",
    "age": 30
  }
]
```

### Get a Single User
**Request:**
```sh
curl -X GET http://localhost:3000/api/users/unique-id
```
**Response:**
```json
{
  "id": "unique-id",
  "name": "John Doe",
  "email": "john@example.com",
  "age": 30
}
```

### Update a User
**Request:**
```sh
curl -X PUT http://localhost:3000/api/users/unique-id \
  -H "Content-Type: application/json" \
  -d '{"name": "Jane Doe", "email": "jane@example.com", "age": 25}'
```
**Response:**
```json
{
  "id": "unique-id",
  "name": "Jane Doe",
  "email": "jane@example.com",
  "age": 25
}
```

### Delete a User
**Request:**
```sh
curl -X DELETE http://localhost:3000/api/users/unique-id
```
**Response:**
```
204 No Content
```

## Error Handling
The API handles the following errors gracefully:
- **400 Bad Request**: Missing or invalid input fields.
- **404 Not Found**: User with the specified ID does not exist.
- **500 Internal Server Error**: Unexpected server errors.

---

Happy coding! 🚀

