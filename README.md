# Private Search Project

## About This Project

This is a personal study project created to test and explore various frameworks and libraries. The project demonstrates a full-stack architecture with a React frontend and NestJS backend working together to deliver a privacy-focused search experience through DuckDuckGo integration using the duck-duck-scrape library.

## Contributions Welcome

This project is open for contributions from anyone interested in learning or experimenting with the technologies used. Feel free to fork, submit pull requests, or suggest improvements.

![image](https://github.com/user-attachments/assets/a00e04db-8516-42a5-b9c7-8bd2b1dbb607)

## Project Structure

```
├── frontend/    # React frontend application
└── backend/     # NestJS backend service
```

### Frontend Tech Stack

- **React** - A JavaScript library for building user interfaces
- **TypeScript** - For type-safe code
- **Vite** - Next generation frontend tooling
- **TanStack Query** - Powerful asynchronous state management
- **TanStack Router** - Type-safe routing solution
- **Zod** - TypeScript-first schema validation
- **TailwindCSS** - Utility-first CSS framework
- **DaisyUI** - Tailwind CSS component library

### Backend Tech Stack

- **NestJS 11** - A progressive Node.js framework
- **TypeScript** - For type-safe development
- **OpenAPI/Swagger** - API documentation
- **Class Validator/Transformer** - Request validation and response serialization
- **duck-duck-scrape** - DuckDuckGo search integration

## Getting Started

### Prerequisites

- Node.js 20 (specified in .nvmrc files)
- npm or yarn
- nvm (Node Version Manager) recommended

> **Note**: Both frontend and backend projects use Node.js 20. If you're using nvm, make sure to run `nvm use` in each project directory before installing dependencies.

### Project Setup

1. Set up Node.js version:
   ```bash
   nvm use
   ```
   > **Note**: A root-level .nvmrc file is provided to ensure consistent Node.js version (v20) across all workspaces.

2. Install all dependencies:
   ```bash
   npm install -prefix frontend
   npm install -prefix backend
   ```

### Frontend Development

1. Start the frontend development server:
   ```bash
   npm run dev -prefix frontend
   ```

### Backend Development

1. Copy the environment file and configure it:

   ```bash
   cp backend/.env.development backend/.env
   ```

2. Start the backend development server:

   ```bash
   npm run start:dev -prefix backend
   ```

## Development

- Frontend runs on `http://localhost:5173` by default
- Backend API runs on `http://localhost:3000` by default
- API documentation is available at `http://localhost:3000/docs`
