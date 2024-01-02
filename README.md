# Inventory Manegment Syatem Documentation

## Overview

Welcome to the official documentation of the Inventory Manegment Syatem. This project is a robust CRUD (Create, Read, Update, Delete) application that manages a products in retailer and make payments and sho all payment before, integrated with user authentication. Developed using NestJS, this documentation provides an in-depth understanding of the project structure, technologies used, and how to run the application.

## Technologies Used

This section provides an overview of the technologies used in the project:

- **Node.js**: A runtime environment for executing JavaScript on the server.
- **NestJS**: A powerful and extensible framework for building server-side applications.
- **mysql**: A SQL database used for storing inventory system.
- **typeORM**: An ORM (Object-Relational Mapping) tool for efficient database access.
- **@nestjs/common**: A core module of NestJS for building controllers, modules, and providers.
- **@nestjs/jwt**: A module for handling JSON Web Tokens (JWT) in NestJS.
- **@nestjs/platform-express**: Express integration for NestJS.
- **@nestjs/swagger**: A module for automatically generating API documentation using Swagger.
- **bcrypt**: A library for hashing and verifying passwords securely.
- **class-transformer**: A library for transforming class objects.
- **class-validator**: A library for data validation.
- **dotenv**: A module for loading environment variables from a .env file.

## Database Information

The project uses mysql as the database for storing inventory system and user data. mysql is a SQL database that provides flexibility for managing unstructured data.


## Project Structure

The project is organized into the following key components:

### Controllers

#### AuthController
- Responsible for authentication and user-related operations.
- Endpoints:
  - `POST /auth/login`: give accsee token.

  #### UserController
- Manages user-related operations.
- Endpoints:
  - `POST /user`: Registers a new user.

    #### ProductController
- Manages product operation and is also protected with authentication guards.
- Endpoints:
  - `POST /product`: Add new Product (Admin role required).
  - `PUT /product/:id`: Updates product information (Admin role required).
  - `GET /product?name?minPrice?maxPrice`: Retrieves Products data with optional filtering.
  - `DELETE /product/:id`: Deletes a Product (Admin role required).

      #### TransactionController
- Manages AllTransaction prossess operation and is also protected with authentication guards.
- Endpoints:
  - `POST /transaction`: Add new Transaction with all Details.
  - `GET /product/:userId`: Retrieves Products data related for spacific user.


## Running the Project

To run the project, follow these steps:

1. Make sure you have Docker and Docker Compose installed on your system.
2. Open a terminal and navigate to the project directory where your `docker-compose.yml` is located.
3. Run the following command to start the project using Docker Compose:

   ```bash
   docker-compose up
4. After the containers are up and running, you can access Swagger documentation at http://localhost:8080/docs-inventory-api.

To access our APIs, please follow these steps to log in with the provided credentials:

## Admin
- **Email**: 'admin@nard.go'
- **Password**: '1234567'

## Member
- **Email**: 'member@nard.go'
- **Password**: '1234567'

After successfully logging in, navigate to the Swagger interface, where you will find an "Authorize" button. Click on it and fill in the "Bearer" field with the access token you obtain upon logging in.





