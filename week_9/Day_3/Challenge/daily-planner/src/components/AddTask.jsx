import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTask } from '../store/tasksSlice'

export default function AddTask({ day }) {
  const dispatch = useDispatch()
  const [title, setTitle] = useState('')
  const [time, setTime] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    const trimmed = title.trim()
    if (!trimmed) return
    dispatch(addTask(day, { title: trimmed, time }))
    setTitle('')
    setTime('')
  }

  return (
    <form className="add-task" onSubmit={handleSubmit}>
      <input
        type="text"
        className="add-task-input"
        placeholder="Add a task for this day…"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        aria-label="New task title"
      />
      <input
        type="time"
        className="add-task-time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
        aria-label="New task time"
      />
      <button type="submit" className="add-task-button">
        Add task
      </button>
    </form>
  )
}
