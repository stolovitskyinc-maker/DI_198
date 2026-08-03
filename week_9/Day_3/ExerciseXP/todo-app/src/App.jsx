import React from 'react'
import { useSelector } from 'react-redux'
import AddTodo from './components/AddTodo'
import TodoList from './components/TodoList'
import { selectAllTodos } from './features/todos/todoSlice'

export default function App() {
  const todos = useSelector(selectAllTodos)
  const remaining = todos.filter((t) => !t.completed).length

  return (
    <div className="app">
      <div className="card">
        <h1>Todo List</h1>
        <p className="subtitle">
          {todos.length === 0
            ? 'Nothing on your list.'
            : `${remaining} of ${todos.length} remaining`}
        </p>
        <AddTodo />
        <TodoList />
      </div>
    </div>
  )
}
