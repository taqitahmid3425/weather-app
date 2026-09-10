# Weather App

A responsive weather dashboard built with React and Tailwind CSS. Search for a city to view its current conditions and a five-day forecast in a clean, focused interface.

**Live demo:** [taqitahmid3425.github.io/weather-app](https://taqitahmid3425.github.io/weather-app)

## Overview

This project is part of my portfolio and a practical showcase of building a weather experience with React. It uses the Open-Meteo APIs to convert a city search into geographic coordinates and retrieve weather data for that location.

The dashboard includes:

- City search with geocoding and location feedback
- Current temperature, weather condition, wind speed, humidity, and atmospheric pressure
- Five-day forecast with daily weather conditions and high and low temperatures
- Loading and error states for the data-fetching flow
- Responsive layout suitable for desktop and mobile screens

## Built With

- [React](https://react.dev/) 19
- [Vite](https://vite.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Lucide React](https://lucide.dev/guide/packages/lucide-react) for interface icons
- [Open-Meteo](https://open-meteo.com/) for geocoding and weather data
- [Prettier](https://prettier.io/) for code formatting

## Getting Started

### Prerequisites

- Node.js 18 or newer
- npm

### Installation

```bash
git clone https://github.com/taqitahmid3425/weather-app.git
cd weather-app
npm install
```

### Development

Start the local development server:

```bash
npm run dev
```

Vite will provide a local URL in the terminal, typically `http://localhost:5173`.

### Production build

Create an optimized production build and preview it locally:

```bash
npm run build
npm run preview
```

## Available Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Vite development server |
| `npm run build` | Build the app for production |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint across the project |
| `npm run deploy` | Build and publish `dist` to GitHub Pages |

## Deployment

The app is deployed to GitHub Pages. To publish a new production build, run:

```bash
npm run deploy
```

The repository homepage is configured for the `/weather-app` GitHub Pages path in `package.json`.

## Roadmap

The next version of this project will be rebuilt with TypeScript and will include API key validation and stronger request validation.

## License

This project is available for personal and portfolio use.
