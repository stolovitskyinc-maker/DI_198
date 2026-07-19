import React from "react";
import { useTaskContext } from "../context/TaskContext";

function TaskFilter() {
  const { state, dispatch } = useTaskContext();

  const filters = ["all", "active", "completed"];

  return (
    <div>
      {filters.map((f) => (
        <button
          key={f}
          onClick={() => dispatch({ type: "FILTER_TASKS", payload: f })}
          style={{ fontWeight: state.filter === f ? "bold" : "normal" }}
        >
          {f.charAt(0).toUpperCase() + f.slice(1)}
        </button>
      ))}
    </div>
  );
}

export default TaskFilter;