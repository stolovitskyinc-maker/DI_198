import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { editTask, deleteTask, toggleTaskDone } from '../store/tasksSlice'

export default function TaskItem({ day, task }) {
  const dispatch = useDispatch()
  const [isEditing, setIsEditing] = useState(false)
  const [draftTitle, setDraftTitle] = useState(task.title)
  const [draftTime, setDraftTime] = useState(task.time || '')

  const handleToggle = () => {
    dispatch(toggleTaskDone({ day, id: task.id }))
  }

  const handleDelete = () => {
    dispatch(deleteTask({ day, id: task.id }))
  }

  const startEdit = () => {
    setDraftTitle(task.title)
    setDraftTime(task.time || '')
    setIsEditing(true)
  }

  const cancelEdit = () => {
    setIsEditing(false)
  }

  const saveEdit = (e) => {
    e.preventDefault()
    const trimmed = draftTitle.trim()
    if (!trimmed) return
    dispatch(
      editTask({
        day,
        id: task.id,
        updates: { title: trimmed, time: draftTime }
      })
    )
    setIsEditing(false)
  }

  if (isEditing) {
    return (
      <form className="task-item editing" onSubmit={saveEdit}>
        <input
          type="text"
          className="task-edit-input"
          value={draftTitle}
          onChange={(e) => setDraftTitle(e.target.value)}
          autoFocus
        />
        <input
          type="time"
          className="task-edit-time"
          value={draftTime}
          onChange={(e) => setDraftTime(e.target.value)}
        />
        <div className="task-item-actions">
          <button type="submit" className="task-save">
            Save
          </button>
          <button type="button" className="task-cancel" onClick={cancelEdit}>
            Cancel
          </button>
        </div>
      </form>
    )
  }

  return (
    <div className={'task-item' + (task.done ? ' done' : '')}>
      <button
        type="button"
        className="task-checkbox"
        onClick={handleToggle}
        aria-label={task.done ? 'Mark task as not done' : 'Mark task as done'}
      >
        {task.done ? '✓' : ''}
      </button>

      <div className="task-body">
        {task.time && <span className="task-time">{task.time}</span>}
        <span className="task-title">{task.title}</span>
      </div>

      <div className="task-item-actions">
        <button type="button" className="task-edit" onClick={startEdit}>
          Edit
        </button>
        <button type="button" className="task-delete" onClick={handleDelete}>
          Delete
        </button>
      </div>
    </div>
  )
}
