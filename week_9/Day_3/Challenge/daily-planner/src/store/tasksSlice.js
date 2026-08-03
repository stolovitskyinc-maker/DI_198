import { createSlice, nanoid } from '@reduxjs/toolkit'

// Helper to format a Date object as a YYYY-MM-DD key
export const toDateKey = (date) => {
  const d = new Date(date)
  const year = d.getFullYear()
  const month = String(d.getMonth() + 1).padStart(2, '0')
  const day = String(d.getDate()).padStart(2, '0')
  return `${year}-${month}-${day}`
}

const todayKey = toDateKey(new Date())

// Initial state: tasksByDay is a dictionary keyed by date string,
// each value is an array of task objects for that day.
const initialState = {
  selectedDate: todayKey,
  tasksByDay: {
    [todayKey]: [
      {
        id: nanoid(),
        title: 'Welcome to your Daily Planner',
        time: '09:00',
        done: false
      },
      {
        id: nanoid(),
        title: 'Click a date to plan another day',
        time: '10:00',
        done: false
      }
    ]
  }
}

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    setSelectedDate: (state, action) => {
      state.selectedDate = action.payload
    },
    addTask: {
      reducer(state, action) {
        const { day, task } = action.payload
        if (!state.tasksByDay[day]) {
          state.tasksByDay[day] = []
        }
        state.tasksByDay[day].push(task)
      },
      prepare(day, { title, time }) {
        return {
          payload: {
            day,
            task: { id: nanoid(), title, time: time || '', done: false }
          }
        }
      }
    },
    editTask: (state, action) => {
      const { day, id, updates } = action.payload
      const dayTasks = state.tasksByDay[day]
      if (!dayTasks) return
      const task = dayTasks.find((t) => t.id === id)
      if (task) {
        Object.assign(task, updates)
      }
    },
    deleteTask: (state, action) => {
      const { day, id } = action.payload
      const dayTasks = state.tasksByDay[day]
      if (!dayTasks) return
      state.tasksByDay[day] = dayTasks.filter((t) => t.id !== id)
    },
    toggleTaskDone: (state, action) => {
      const { day, id } = action.payload
      const dayTasks = state.tasksByDay[day]
      if (!dayTasks) return
      const task = dayTasks.find((t) => t.id === id)
      if (task) task.done = !task.done
    }
  }
})

export const {
  setSelectedDate,
  addTask,
  editTask,
  deleteTask,
  toggleTaskDone
} = tasksSlice.actions

// Selectors
export const selectSelectedDate = (state) => state.tasks.selectedDate
export const selectTasksForDay = (state, day) =>
  state.tasks.tasksByDay[day] || []

export default tasksSlice.reducer
