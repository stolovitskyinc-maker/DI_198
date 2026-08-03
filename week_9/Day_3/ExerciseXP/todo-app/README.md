# Redux Toolkit Todo App

A basic Todo List app built with React, Redux Toolkit, and react-redux.

## Structure

- `src/features/todos/todoSlice.js` — the todos slice (`addTodo`, `toggleTodo`, `removeTodo`)
- `src/app/store.js` — the Redux store (`configureStore`)
- `src/components/AddTodo.jsx` — input + dispatches `addTodo`
- `src/components/TodoList.jsx` — reads todos via `useSelector`, renders `TodoItem`s
- `src/components/TodoItem.jsx` — dispatches `toggleTodo` / `removeTodo`
- `src/App.jsx` — wires it all together

## Setup

```bash
npm install
npm run dev
```

Then open the printed local URL (usually http://localhost:5173).

## Build for production

```bash
npm run build
npm run preview
```
