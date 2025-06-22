# CountriQ - Project Structure

This is a React + TypeScript + Vite quiz application with two game modes:

## Game Modes
1. **Flag Frenzy** - Guess the country from its flag
2. **Country Crunch** - Create a chain of countries where each country starts with the last letter of the previous one

## Project Structure
```
countriq/
├── public/
│   └── vite.svg
├── src/
│   ├── components/
│   │   ├── HomePage.tsx
│   │   ├── FlagFrenzy.tsx
│   │   ├── FlagFrenzy.css
│   │   ├── CountryCrunch.tsx
│   │   ├── Timer.tsx
│   │   └── ResultScreen.tsx
│   ├── data/
│   │   └── countries.ts
│   ├── App.tsx
│   ├── App.css
│   ├── main.tsx
│   ├── index.css
│   └── vite-env.d.ts
├── package.json
├── vite.config.ts
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.node.json
├── eslint.config.js
├── index.html
└── README.md
```

## Installation & Setup
```bash
npm install
npm run dev
```

## Features
- Responsive design
- Timer functionality
- Score tracking
- Local storage for best scores
- Modern React with TypeScript
- Vite for fast development