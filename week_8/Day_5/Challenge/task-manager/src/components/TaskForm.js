import React, { useState } from "react";
import { useTaskContext } from "../context/TaskContext";

function TaskForm() {
  const [text, setText] = useState("");
  const { dispatch } = useTaskContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    dispatch({ type: "ADD_TASK", payload: text });
    setText("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a new task"
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default TaskForm;