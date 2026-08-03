# React + TypeScript Exercises

A complete Vite + React + TypeScript project containing all 5 exercises.

## Setup

```bash
npm install
npm run dev
```

Then open the URL Vite prints (usually http://localhost:5173).

## Where to find each exercise

| Exercise | File(s) |
|---|---|
| 1 — Vite + React + TS project | This whole project (`package.json`, `vite.config.ts`, `tsconfig.json`) |
| 2 — Component with typed props | `src/components/Greeting.tsx` |
| 3 — `useState` with TypeScript | `src/components/Counter.tsx` |
| 4 — Optional props with defaults | `src/components/UserCard.tsx` |
| 5 — `useEffect` + API fetch | `src/components/UserList.tsx` |

All components are wired up and rendered together in `src/App.tsx`, so
`npm run dev` shows all five exercises on one page.

## Scripts

- `npm run dev` — start the dev server
- `npm run build` — type-check and build for production
- `npm run preview` — preview the production build locally

## Notes

- Exercise 5 fetches live data from `https://jsonplaceholder.typicode.com/users`,
  so you'll need an internet connection for it to load.
- Node.js 18+ is recommended.
