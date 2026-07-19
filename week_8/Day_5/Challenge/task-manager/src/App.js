import React from "react";
import { TaskProvider } from "./context/TaskContext";
import TaskForm from "./components/TaskForm";
import TaskFilter from "./components/TaskFilter";
import TaskList from "./components/TaskList";

function App() {
  return (
    <TaskProvider>
      <div style={{ maxWidth: 500, margin: "40px auto", fontFamily: "sans-serif" }}>
        <h1>Task Manager</h1>
        <TaskForm />
        <TaskFilter />
        <TaskList />
      </div>
    </TaskProvider>
  );
}

export default App;