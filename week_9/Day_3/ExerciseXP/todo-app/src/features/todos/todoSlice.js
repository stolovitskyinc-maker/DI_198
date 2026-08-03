import { createSlice, nanoid } from '@reduxjs/toolkit'

const initialState = {
  todos: [
    // Example seed data — feel free to remove these
    { id: nanoid(), text: 'Learn Redux Toolkit', completed: true },
    { id: nanoid(), text: 'Build a Todo app', completed: false },
  ],
}

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: {
      reducer(state, action) {
        state.todos.push(action.payload)
      },
      // Prepare callback lets us call addTodo('some text') from components
      // while still generating a unique id and normalized shape here.
      prepare(text) {
        return {
          payload: {
            id: nanoid(),
            text,
            completed: false,
          },
        }
      },
    },
    toggleTodo(state, action) {
      const todo = state.todos.find((t) => t.id === action.payload)
      if (todo) {
        todo.completed = !todo.completed
      }
    },
    removeTodo(state, action) {
      state.todos = state.todos.filter((t) => t.id !== action.payload)
    },
  },
})

export const { addTodo, toggleTodo, removeTodo } = todoSlice.actions

// Selectors
export const selectAllTodos = (state) => state.todos.todos

export default todoSlice.reducer
