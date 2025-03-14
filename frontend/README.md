# Private Search

## About This Project

This is a personal study project created to test and explore modern React practices and powerful libraries. The frontend implements a well-structured architecture using libraries for state management, routing, and data validation, working in conjunction with a NestJS backend that utilizes the duck-duck-scrape library to provide privacy-focused search results from DuckDuckGo.

## Contributions Welcome

This project is open for contributions from anyone interested in learning or experimenting with the technologies used. Feel free to fork, submit pull requests, or suggest improvements.

![image](https://github.com/user-attachments/assets/376f943c-7009-4474-a59b-3e5422caccdf)


## Tech Stack

- **React** - A JavaScript library for building user interfaces
- **TypeScript** - For type-safe code
- **Vite** - Next generation frontend tooling
- **TanStack Query** - Powerful asynchronous state management
- **TanStack Router** - Type-safe routing solution
- **Zod** - TypeScript-first schema validation
- **TailwindCSS** - Utility-first CSS framework
- **DaisyUI** - Tailwind CSS component library

## Project Structure

```
src/
├── api/        # External API calls and service interfaces
├── assets/     # Static assets (images, fonts, etc.)
├── components/ # Reusable UI components and pages
├── configs/    # Application configuration files
├── domain/     # Domain-specific interfaces and types
├── hooks/      # Custom React hooks
├── routes/     # Route configurations and definitions
├── states/     # Application state management
├── styles/     # Global styles and theme definitions
├── types/      # TypeScript type definitions
└── utils/      # Utility functions and helpers
```

## Getting Started

### Prerequisites

- Node.js 20 (required)
- npm or yarn
- nvm (Node Version Manager) strongly recommended

> **Important**: This project requires Node.js version 20. We strongly recommend using nvm (Node Version Manager) to manage your Node.js versions. The project includes an `.nvmrc` file to automatically specify the correct version.

### Node.js Version Setup

Before installing dependencies, ensure you're using the correct Node.js version:

```bash
nvm use
```

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

### Development

Start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Building for Production

```bash
npm run build
```

### Running Tests

```bash
npm run test
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run test` - Run tests

## Features

- Type-safe routing with TanStack Router
- Efficient data fetching and caching with TanStack Query
- Schema validation with Zod
- Modern UI components with TailwindCSS and DaisyUI
- Comprehensive test coverage
- ESLint configuration for code quality


## License

This project is open source and created for educational purposes. It's intended as a personal study project to test frameworks and libraries.
