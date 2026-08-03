import Calendar from './components/Calendar'
import TaskList from './components/TaskList'

export default function App() {
  return (
    <div className="app-shell">
      <header className="app-header">
        <div className="app-header-eyebrow">Daily Planner</div>
        <h1 className="app-header-title">Plan the day, one line at a time.</h1>
      </header>

      <main className="app-main">
        <aside className="app-sidebar">
          <Calendar />
        </aside>
        <section className="app-content">
          <TaskList />
        </section>
      </main>
    </div>
  )
}
