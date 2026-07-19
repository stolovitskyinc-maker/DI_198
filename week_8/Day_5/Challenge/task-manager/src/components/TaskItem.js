import React, { useState, useRef } from "react";
import { useTaskContext } from "../context/TaskContext";

function TaskItem({ task }) {
  const { dispatch } = useTaskContext();
  const [isEditing, setIsEditing] = useState(false);
  const inputRef = useRef(null);

  const handleEditClick = () => {
    setIsEditing(true);
    // Focus the input as soon as it renders
    setTimeout(() => inputRef.current?.focus(), 0);
  };

  const handleSave = () => {
    const newText = inputRef.current.value.trim();
    if (newText) {
      dispatch({
        type: "EDIT_TASK",
        payload: { id: task.id, text: newText },
      });
    }
    setIsEditing(false);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleSave();
    if (e.key === "Escape") setIsEditing(false);
  };

  return (
    <li>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => dispatch({ type: "TOGGLE_TASK", payload: task.id })}
      />

      {isEditing ? (
        <input
          ref={inputRef}
          defaultValue={task.text}
          onKeyDown={handleKeyDown}
          onBlur={handleSave}
        />
      ) : (
        <span
          style={{ textDecoration: task.completed ? "line-through" : "none" }}
        >
          {task.text}
        </span>
      )}

      {!isEditing && <button onClick={handleEditClick}>Edit</button>}
      <button onClick={() => dispatch({ type: "DELETE_TASK", payload: task.id })}>
        Delete
      </button>
    </li>
  );
}

export default TaskItem;