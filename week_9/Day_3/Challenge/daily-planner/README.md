# Daily Planner (React + Redux Toolkit)

A daily planner app for viewing, adding, editing, and deleting tasks per day,
built with React, Redux Toolkit, and Vite.

## Requirements

- Node.js 18+ and npm

## Setup

```bash
npm install
npm run dev
```

Then open the URL Vite prints (usually http://localhost:5173).

## Build for production

```bash
npm run build
npm run preview
```

## Project structure

```
src/
  main.jsx               # App entry, wraps App in Redux <Provider>
  App.jsx                # Layout: Calendar + TaskList
  index.css              # Styling
  store/
    store.js             # configureStore setup
    tasksSlice.js         # State, actions (addTask/editTask/deleteTask/
                          # toggleTaskDone/setSelectedDate), reducers, selectors
  components/
    Calendar.jsx          # Month-grid date picker, dispatches setSelectedDate
    TaskList.jsx           # Reads tasks for the selected day via useSelector
    AddTask.jsx             # Dispatches addTask
    TaskItem.jsx             # Dispatches editTask / deleteTask / toggleTaskDone
```

## How the state is organized

`tasksByDay` is an object keyed by `YYYY-MM-DD` date strings, each holding an
array of task objects (`{ id, title, time, done }`). `selectedDate` tracks
which day is currently shown. Selecting a day in the Calendar component
dispatches `setSelectedDate`, and `TaskList` re-renders with that day's tasks
via `useSelector`.
