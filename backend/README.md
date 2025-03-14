# Private Search Backend

## About This Project

This is a personal study project created to test and explore NestJS and related backend technologies. The service is built with NestJS 11, providing a modern and efficient API for search operations that integrates with DuckDuckGo's search capabilities through the duck-duck-scrape package.

## Contributions Welcome

This project is open for contributions from anyone interested in learning or experimenting with the technologies used. Feel free to fork, submit pull requests, or suggest improvements.

![image](https://github.com/user-attachments/assets/b0069a96-8cba-4cd9-9cc2-6000f2ccc788)


## Key Features

- Built with NestJS 11 framework
- OpenAPI/Swagger documentation
- Request validation using class-validator
- Response serialization with class-transformer
- DuckDuckGo search integration via duck-duck-scrape
- Modular architecture following domain-driven design principles

## Project Structure

```
src/
├── config/        # Project configuration files
├── core/          # Core abstractions, contracts, and system fundamentals
├── external/      # External service integrations (e.g., DuckDuckGo)
└── modules/       # Business domain modules
```

### Directory Details

- **config/**: Contains configuration settings for the application, environment variables, and service configurations.

- **core/**: Houses fundamental elements that define the system's structure and behavior:
  - Abstractions and interfaces
  - Core contracts
  - Constants
  - Base classes and utilities

- **external/**: Manages external service integrations:
  - DuckDuckGo search provider implementation
  - Service adapters and interfaces

- **modules/**: Contains business domain modules, each representing a specific context with its own:
  - Controllers
  - Services
  - DTOs
  - Domain models


## Getting Started

### Prerequisites

- Node.js 20 (required)
- npm or yarn
- nvm (Node Version Manager) strongly recommended

> **Important**: This project requires Node.js version 20. We strongly recommend using nvm (Node Version Manager) to manage your Node.js versions. The project includes an `.nvmrc` file to automatically specify the correct version.

### Installation

1. Set up Node.js version:
```bash
nvm use
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env
```

4. Start the development server:
```bash
npm run start:dev
```

## Available Scripts

- `npm run build`: Build the application
- `npm run start`: Start the application
- `npm run start:dev`: Start in development mode with watch
- `npm run start:debug`: Start in debug mode
- `npm run start:prod`: Start in production mode
- `npm run lint`: Lint the codebase
- `npm run test`: Run tests
- `npm run test:watch`: Run tests in watch mode
- `npm run test:cov`: Generate test coverage report
- `npm run test:debug`: Debug tests
- `npm run test:e2e`: Run end-to-end tests

## API Documentation

Once the application is running, you can access the Swagger documentation at:

```
http://localhost:3000/docs
```

This provides an interactive API documentation where you can:
- View available endpoints
- Test API operations
- View request/response schemas
- Download OpenAPI specification

## License

This project is open source and created for educational purposes. It's intended as a personal study project to test frameworks and libraries.
