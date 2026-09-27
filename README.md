# ERADS Frontend

ERADS Frontend is the React client for the Emergency Response Ambulance Dispatch System. It gives dispatchers and operators a simple interface to report new emergencies, capture incident details, and track an emergency using an access code.

## Overview

This app is built with Vite + React and is designed to work with an ERADS backend service that exposes emergency endpoints on port 8080. The current frontend includes:

- a report emergency form
- location selection with map-based input and browser geolocation
- validation for emergency type, priority, description, and coordinates
- tracking by access code
- Redux state management for request lifecycle and status display

## Features

- Report emergency incidents with type and priority
- Capture incident description and location coordinates
- Use the browser’s geolocation feature or select a point on the map
- Track previous reports by access code
- Validate payloads with Zod schemas before submission
- SPA navigation between reporting and tracking views
- Responsive layout with Tailwind-based styling

## Tech Stack

- React 19
- Vite 8
- Redux Toolkit
- React Router DOM
- Axios
- Zod
- Leaflet + React Leaflet
- ESLint

## Requirements

- Node.js 18+
- npm 9+
- ERADS backend running locally on `http://localhost:8080`

## Installation

```bash
git clone <repository-url>
cd erads-frontend
npm install
```

## Running the app

Start the development server:

```bash
npm run dev
```

The app is usually available at:

```text
http://localhost:5173
```

## Expected backend

This frontend expects the API base to be:

```text
http://localhost:8080/api/emergencies
```

The backend should support the following flows:

- `POST /api/emergencies` to create a new report
- `POST /api/emergencies/track/:accessCode` to fetch an emergency by access code

If the backend is not running, the report and tracking actions will fail at runtime.

## Available scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Starts the Vite development server |
| `npm run build` | Creates a production build |
| `npm run preview` | Serves the production build locally |
| `npm run lint` | Runs ESLint checks |

## Project structure

```text
src/
├── api/
│   └── emergencyApi.js        # API wrappers for report and lookup requests
├── components/
│   ├── LocationPicker.jsx      # Map/location selection UI
│   ├── ReportEmergencyForm.jsx # Report incident form
│   └── TrackEmergency.jsx      # Track incident form/status UI
├── schemas/
│   └── emergencySchema.js      # Zod validation rules
├── store/
│   ├── emergencySlice.js        # Redux async thunks and state logic
│   └── store.js                # Redux store setup
├── App.jsx                    # App shell with routes
├── index.css                  # Global styles
├── main.jsx                   # Application bootstrap
└── assets/                    # Static assets
public/                        # Public static files
```

## Application flow

1. Open the app at `/` to submit a new emergency report.
2. Enter the emergency type, priority, and description.
3. Optionally use the current location or pick a point on the map.
4. Submit the incident. The app stores the generated access code returned by the backend.
5. Navigate to `/track` and enter the access code to check the incident status.

## Validation and UX notes

- Descriptions must be at least 10 characters and no longer than 200.
- Access codes are validated as 8-character strings.
- The app displays loading state, validation errors, and backend error messages.
- Geolocation permission can be denied, in which case the user can continue with manual map selection.

## Contributing

1. Create a feature branch.
2. Make the relevant UI or API changes.
3. Run linting and build checks locally.
4. Submit a pull request with a clear summary of the change.

## License

This project is private unless otherwise stated.

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
