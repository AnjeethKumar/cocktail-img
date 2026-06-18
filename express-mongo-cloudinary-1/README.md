# Express Mongo Cloudinary

This project is a simple Express application that integrates MongoDB for data storage and Cloudinary for media management. It provides user authentication features, allowing users to register and log in.

## Table of Contents

- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [License](#license)

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/express-mongo-cloudinary.git
   ```

2. Navigate to the project directory:
   ```
   cd express-mongo-cloudinary
   ```

3. Install the dependencies:
   ```
   npm install
   ```

4. Create a `.env` file based on the `.env.example` template and fill in your MongoDB and Cloudinary credentials.

## Configuration

Make sure to set the following environment variables in your `.env` file:

- `MONGODB_URI`: Your MongoDB connection string.
- `CLOUDINARY_CLOUD_NAME`: Your Cloudinary cloud name.
- `CLOUDINARY_API_KEY`: Your Cloudinary API key.
- `CLOUDINARY_API_SECRET`: Your Cloudinary API secret.
- `JWT_SECRET`: A secret key for signing JWT tokens.

## Usage

To start the application, run:
```
npm start
```

The server will start on `http://localhost:3000`.

## API Endpoints

- **POST /api/auth/register**: Register a new user.
- **POST /api/auth/login**: Log in an existing user.

## License

This project is licensed under the MIT License. See the LICENSE file for details.