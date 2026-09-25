# ERADS Frontend

A modern React frontend application powered by Vite. The project provides a fast development workflow, hot module replacement, and ESLint integration for maintaining code quality.

## Features

- React-based user interface
- Fast development server with Vite
- Hot Module Replacement (HMR)
- ESLint configuration
- Optimized production builds
- Modern and maintainable project structure

## Requirements

- Node.js 18 or later
- npm 9 or later

## Installation

Clone the repository and install its dependencies:

```bash
git clone <repository-url>
cd erads-frontend
npm install
```

## Development

Start the development server:

```bash
npm run dev
```

The application will be available at the local URL displayed in the terminal, usually:

```text
http://localhost:5173
```

## Available Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Starts the development server |
| `npm run build` | Creates a production build |
| `npm run preview` | Previews the production build |
| `npm run lint` | Checks the code using ESLint |

## Production

Build the application:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## Code Quality

Run ESLint to identify code-quality issues:

```bash
npm run lint
```

## React Compiler

The React Compiler is not enabled by default because it may affect development and build performance. To enable it, follow the [official React Compiler documentation](https://react.dev/learn/react-compiler/installation).

## Contributing

1. Create a new branch for your changes.
2. Make the required updates.
3. Run the lint and build commands.
4. Submit a pull request with a clear description.

## License

This project is private unless stated otherwise.# ERADS Frontend

The web interface for the **Emergency Response Ambulance Dispatch System (ERADS)**. This application enables emergency response teams and dispatch operators to coordinate ambulance requests, monitor incidents, and manage emergency response activities through a centralized dashboard.

## Overview

ERADS Frontend is a React-based user interface designed to support ambulance dispatch operations. It provides a foundation for managing emergency incidents, dispatching available ambulances, and monitoring response status in real time.

## Features

- Emergency incident management
- Ambulance dispatch coordination
- Dispatch and response status monitoring
- Operator-focused dashboard interface
- Responsive user interface
- Fast development workflow with Vite
- ESLint integration for code quality

## Technology Stack

- **React**
- **Vite**
- **JavaScript**
- **ESLint**
- **CSS**

## Requirements

- Node.js 18 or later
- npm 9 or later

## Installation

Clone the repository and install the project dependencies:

```bash
git clone <repository-url>
cd erads-frontend
npm install
```

## Development

Start the development server:

```bash
npm run dev
```

The application will be available at the local URL displayed in the terminal, usually:

```text
http://localhost:5173
```

## Available Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Starts the development server |
| `npm run build` | Creates an optimized production build |
| `npm run preview` | Previews the production build locally |
| `npm run lint` | Runs ESLint checks |

## Production Build

Create a production build:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## Code Quality

Run ESLint before committing changes:

```bash
npm run lint
```

## Project Structure

```text
src/
├── assets/       # Images, icons, and other static assets
├── components/   # Reusable interface components
├── pages/        # Application pages and views
├── App.jsx       # Root application component
└── main.jsx      # Application entry point
public/           # Public static files
```

## Contributing

1. Create a new branch for your changes.
2. Follow the existing project structure and coding conventions.
3. Run the lint and build commands.
4. Commit your changes with a clear message.
5. Submit a pull request describing your updates.

## License

This project is private unless stated otherwise.# ERADS Frontend

The web interface for the **Emergency Response Ambulance Dispatch System (ERADS)**. This application enables emergency response teams and dispatch operators to coordinate ambulance requests, monitor incidents, and manage emergency response activities through a centralized dashboard.

## Overview

ERADS Frontend is a React-based user interface designed to support ambulance dispatch operations. It provides a foundation for managing emergency incidents, dispatching available ambulances, and monitoring response status in real time.

## Features

- Emergency incident management
- Ambulance dispatch coordination
- Dispatch and response status monitoring
- Operator-focused dashboard interface
- Responsive user interface
- Fast development workflow with Vite
- ESLint integration for code quality

## Technology Stack

- **React**
- **Vite**
- **JavaScript**
- **ESLint**
- **CSS**

## Requirements

- Node.js 18 or later
- npm 9 or later

## Installation

Clone the repository and install the project dependencies:

```bash
git clone <repository-url>
cd erads-frontend
npm install
```

## Development

Start the development server:

```bash
npm run dev
```

The application will be available at the local URL displayed in the terminal, usually:

```text
http://localhost:5173
```

## Available Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Starts the development server |
| `npm run build` | Creates an optimized production build |
| `npm run preview` | Previews the production build locally |
| `npm run lint` | Runs ESLint checks |

## Production Build

Create a production build:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## Code Quality

Run ESLint before committing changes:

```bash
npm run lint
```

## Project Structure

```text
src/
├── assets/       # Images, icons, and other static assets
├── components/   # Reusable interface components
├── pages/        # Application pages and views
├── App.jsx       # Root application component
└── main.jsx      # Application entry point
public/           # Public static files
```

## Contributing

1. Create a new branch for your changes.
2. Follow the existing project structure and coding conventions.
3. Run the lint and build commands.
4. Commit your changes with a clear message.
5. Submit a pull request describing your updates.

## License

This project is private unless stated otherwise.# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
