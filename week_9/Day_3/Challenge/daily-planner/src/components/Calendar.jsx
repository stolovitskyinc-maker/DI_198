import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  selectSelectedDate,
  setSelectedDate,
  toDateKey
} from '../store/tasksSlice'

const WEEKDAY_LABELS = ['S', 'M', 'T', 'W', 'T', 'F', 'S']
const MONTH_LABELS = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
]

function buildMonthGrid(year, month) {
  // month is 0-indexed
  const firstOfMonth = new Date(year, month, 1)
  const startOffset = firstOfMonth.getDay()
  const daysInMonth = new Date(year, month + 1, 0).getDate()

  const cells = []
  for (let i = 0; i < startOffset; i++) cells.push(null)
  for (let day = 1; day <= daysInMonth; day++) {
    cells.push(new Date(year, month, day))
  }
  return cells
}

export default function Calendar() {
  const dispatch = useDispatch()
  const selectedDate = useSelector(selectSelectedDate)
  const selectedAsDate = new Date(selectedDate + 'T00:00:00')

  const [viewYear, setViewYear] = useState(selectedAsDate.getFullYear())
  const [viewMonth, setViewMonth] = useState(selectedAsDate.getMonth())

  const todayKey = toDateKey(new Date())
  const cells = buildMonthGrid(viewYear, viewMonth)

  const goToPrevMonth = () => {
    if (viewMonth === 0) {
      setViewMonth(11)
      setViewYear((y) => y - 1)
    } else {
      setViewMonth((m) => m - 1)
    }
  }

  const goToNextMonth = () => {
    if (viewMonth === 11) {
      setViewMonth(0)
      setViewYear((y) => y + 1)
    } else {
      setViewMonth((m) => m + 1)
    }
  }

  const handleSelectDay = (date) => {
    if (!date) return
    dispatch(setSelectedDate(toDateKey(date)))
  }

  return (
    <div className="calendar">
      <div className="calendar-header">
        <button
          type="button"
          className="calendar-nav"
          onClick={goToPrevMonth}
          aria-label="Previous month"
        >
          ‹
        </button>
        <span className="calendar-title">
          {MONTH_LABELS[viewMonth]} {viewYear}
        </span>
        <button
          type="button"
          className="calendar-nav"
          onClick={goToNextMonth}
          aria-label="Next month"
        >
          ›
        </button>
      </div>

      <div className="calendar-weekdays">
        {WEEKDAY_LABELS.map((label, i) => (
          <span key={`${label}-${i}`}>{label}</span>
        ))}
      </div>

      <div className="calendar-grid">
        {cells.map((date, idx) => {
          if (!date) {
            return <span key={`empty-${idx}`} className="calendar-cell empty" />
          }
          const key = toDateKey(date)
          const isSelected = key === selectedDate
          const isToday = key === todayKey

          return (
            <button
              type="button"
              key={key}
              className={
                'calendar-cell' +
                (isSelected ? ' selected' : '') +
                (isToday ? ' today' : '')
              }
              onClick={() => handleSelectDay(date)}
            >
              {date.getDate()}
            </button>
          )
        })}
      </div>
    </div>
  )
}
