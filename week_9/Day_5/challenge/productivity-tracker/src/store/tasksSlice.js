import { createSlice, nanoid } from '@reduxjs/toolkit';

// Each task: { id, title, categoryId, completed, progress (0-100) }
const initialState = {
  items: [
    { id: 'task-1', title: 'Write project proposal', categoryId: 'cat-work', completed: false, progress: 40 },
    { id: 'task-2', title: 'Review pull requests', categoryId: 'cat-work', completed: true, progress: 100 },
    { id: 'task-3', title: 'Morning run', categoryId: 'cat-health', completed: false, progress: 0 },
    { id: 'task-4', title: 'Read 20 pages', categoryId: 'cat-personal', completed: false, progress: 60 },
  ],
};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    // Add a new task. Expects { title, categoryId }
    addTask: {
      reducer(state, action) {
        state.items.push(action.payload);
      },
      prepare({ title, categoryId }) {
        return {
          payload: {
            id: nanoid(),
            title,
            categoryId,
            completed: false,
            progress: 0,
          },
        };
      },
    },

    // Edit an existing task's fields. Expects { id, changes: { title?, categoryId? } }
    editTask(state, action) {
      const { id, changes } = action.payload;
      const task = state.items.find((t) => t.id === id);
      if (task) {
        Object.assign(task, changes);
      }
    },

    // Remove a task by id
    deleteTask(state, action) {
      const id = action.payload;
      state.items = state.items.filter((t) => t.id !== id);
    },

    // Update progress (0-100). Marks completed automatically once progress hits 100.
    updateTaskProgress(state, action) {
      const { id, progress } = action.payload;
      const task = state.items.find((t) => t.id === id);
      if (task) {
        task.progress = Math.max(0, Math.min(100, progress));
        task.completed = task.progress === 100;
      }
    },

    // Toggle completed on/off directly; syncs progress to match.
    toggleTaskCompleted(state, action) {
      const id = action.payload;
      const task = state.items.find((t) => t.id === id);
      if (task) {
        task.completed = !task.completed;
        task.progress = task.completed ? 100 : task.progress === 100 ? 0 : task.progress;
      }
    },
  },
});

export const { addTask, editTask, deleteTask, updateTaskProgress, toggleTaskCompleted } = tasksSlice.actions;
export default tasksSlice.reducer;
