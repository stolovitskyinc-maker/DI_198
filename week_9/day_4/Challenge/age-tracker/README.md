# Age Tracker

A React app using Redux Toolkit + Thunk middleware to asynchronously increment/decrement an age value, with a loading spinner during updates.

## Getting Started

```bash
npm install
npm run dev
```

Then open the URL shown in the terminal (typically http://localhost:5173).

## Build for production

```bash
npm run build
npm run preview
```

## Project Structure

```
age-tracker/
├── index.html
├── package.json
├── vite.config.js
└── src/
    ├── main.jsx              # Entry point, wraps App in <Provider>
    ├── App.jsx                # Root component
    ├── index.css              # Styling
    ├── app/
    │   └── store.js           # configureStore setup (thunk included by default)
    ├── features/age/
    │   └── ageSlice.js        # createSlice + createAsyncThunk (ageUpAsync/ageDownAsync)
    └── components/
        ├── AgeDisplay.jsx      # Shows age + loading spinner
        └── AgeControls.jsx     # "Age Up" / "Age Down" buttons
```
