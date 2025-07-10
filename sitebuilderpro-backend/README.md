# SiteBuilderPro Backend

## Overview
This is the backend for the SiteBuilderPro application, which provides user authentication functionalities including login and signup.

## Technologies Used
- Node.js
- Express.js
- MongoDB (with Mongoose)
- JWT (JSON Web Tokens) for authentication

## Project Structure
```
sitebuilderpro-backend
├── src
│   ├── controllers          # Contains the authentication logic
│   │   └── authController.js
│   ├── models               # Defines the data models
│   │   └── user.js
│   ├── routes               # API routes for authentication
│   │   └── authRoutes.js
│   ├── middleware           # Middleware for authentication checks
│   │   └── authMiddleware.js
│   ├── config               # Configuration files
│   │   └── db.js
│   └── app.js              # Entry point of the application
├── package.json             # Project dependencies and scripts
└── README.md                # Project documentation
```

## Setup Instructions
1. Clone the repository:
   ```
   git clone <repository-url>
   cd sitebuilderpro-backend
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Set up your MongoDB database and update the connection string in `src/config/db.js`.

4. Start the server:
   ```
   npm start
   ```

## API Endpoints
### User Registration
- **Endpoint:** `POST /api/auth/register`
- **Request Body:**
  ```json
  {
    "email": "user@example.com",
    "password": "yourpassword"
  }
  ```
- **Response:** 
  - Success: 201 Created
  - Error: 400 Bad Request

### User Login
- **Endpoint:** `POST /api/auth/login`
- **Request Body:**
  ```json
  {
    "email": "user@example.com",
    "password": "yourpassword"
  }
  ```
- **Response:** 
  - Success: 200 OK with JWT token
  - Error: 401 Unauthorized

## Usage Examples
- To register a new user, send a POST request to `/api/auth/register` with the required fields.
- To log in, send a POST request to `/api/auth/login` with your credentials.

## License
This project is licensed under the MIT License.