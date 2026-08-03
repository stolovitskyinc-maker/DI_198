import { useSelector } from 'react-redux'
import { selectSelectedDate, selectTasksForDay } from '../store/tasksSlice'
import TaskItem from './TaskItem'
import AddTask from './AddTask'

const WEEKDAY_LABELS = [
  'Sunday', 'Monday', 'Tuesday', 'Wednesday',
  'Thursday', 'Friday', 'Saturday'
]
const MONTH_LABELS = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
]

function formatDisplayDate(dayKey) {
  const date = new Date(dayKey + 'T00:00:00')
  const weekday = WEEKDAY_LABELS[date.getDay()]
  const month = MONTH_LABELS[date.getMonth()]
  return `${weekday}, ${month} ${date.getDate()}`
}

export default function TaskList() {
  const selectedDate = useSelector(selectSelectedDate)
  const tasks = useSelector((state) => selectTasksForDay(state, selectedDate))

  const remaining = tasks.filter((t) => !t.done).length

  return (
    <div className="task-list-panel">
      <div className="task-list-header">
        <h2 className="task-list-date">{formatDisplayDate(selectedDate)}</h2>
        <span className="task-list-count">
          {tasks.length === 0
            ? 'No tasks yet'
            : `${remaining} of ${tasks.length} remaining`}
        </span>
      </div>

      <AddTask day={selectedDate} />

      {tasks.length === 0 ? (
        <div className="task-list-empty">
          Nothing planned for this day. Add a task above to get started.
        </div>
      ) : (
        <div className="task-list">
          {tasks.map((task) => (
            <TaskItem key={task.id} day={selectedDate} task={task} />
          ))}
        </div>
      )}
    </div>
  )
}
