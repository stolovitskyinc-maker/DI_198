import React from 'react'
import { useSelector } from 'react-redux'
import { selectAllTodos } from '../features/todos/todoSlice'
import TodoItem from './TodoItem'

export default function TodoList() {
  const todos = useSelector(selectAllTodos)

  if (todos.length === 0) {
    return <p className="empty-state">No todos yet — add one above.</p>
  }

  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  )
}
