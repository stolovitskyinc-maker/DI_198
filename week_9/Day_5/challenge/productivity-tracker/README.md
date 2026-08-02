# Productivity Tracker

A small React + Redux app for logging daily tasks, grouping them by category, and tracking progress.

## Stack

- **React 18** (function components + hooks only)
- **Redux Toolkit** (`configureStore`, `createSlice`, `createSelector` — this is the modern, recommended way to write "actions and reducers" and memoized selectors; `createSelector` is re-exported from `reselect`)
- **react-redux** (`useSelector`, `useDispatch`, `<Provider>`)
- **Vite** as the dev server/bundler

## Run it

```bash
npm install
npm run dev
```

Then open the printed local URL (usually http://localhost:5173).

## Project structure

```
src/
  store/
    tasksSlice.js       # tasks state + addTask/editTask/deleteTask/updateTaskProgress/toggleTaskCompleted
    categoriesSlice.js  # categories state + addCategory/editCategory/deleteCategory
    selectors.js        # selectTasksByCategory, selectCompletedTasks, selectCategoryById
    store.js            # configureStore, combines both slices
  components/
    CategorySelector.jsx  # useSelector -> list + pick a category
    TaskList.jsx           # useSelector -> tasks for the selected category + completed count
    TaskItem.jsx            # useCallback-wrapped edit/complete/progress handlers
    AddTaskForm.jsx         # create a task in the current category
  App.jsx
  main.jsx               # <Provider store={store}><App /></Provider>
```

## How the pieces map to the spec

1. **Redux setup** — `store.js` combines a `tasks` reducer and a `categories` reducer, each with its own initial state (seeded with a few sample tasks/categories so the UI isn't empty on first load).
2. **Actions & reducers** — each slice is built with `createSlice`, which generates action creators and a reducer together. `addTask`/`addCategory` use a `prepare` callback so callers pass plain data (`{ title, categoryId }`) and the slice generates the `id`.
3. **Selectors** — `selectors.js` uses `createSelector` for memoization:
   - `selectTasksByCategory(state, categoryId)` — filters tasks by category (or returns all for `'all'`)
   - `selectCompletedTasks(state, categoryId)` — derives a completed count from `selectTasksByCategory`, so it stays in sync automatically
   - `selectCategoryById(state, categoryId)` — looks up one category's details
4. **TaskList / CategorySelector** — both are plain function components that call `useSelector` directly; no prop-drilling of the whole store.
5. **Editing & completion** — `TaskItem` wraps its handlers (`toggleTaskCompleted`, `updateTaskProgress`, `deleteTask`, save/cancel edit) in `useCallback` so they don't get recreated on every render of the list, which matters once `TaskList` is rendering many `TaskItem`s from a `.map()`.

## Extending it

- Add a `CategoryManager` component (mirrors `AddTaskForm`) to expose `addCategory`/`editCategory`/`deleteCategory` in the UI — the actions already exist in `categoriesSlice.js`.
- Swap the in-memory seed data for `localStorage` persistence via `redux-persist`, or wire up an API with RTK Query.
