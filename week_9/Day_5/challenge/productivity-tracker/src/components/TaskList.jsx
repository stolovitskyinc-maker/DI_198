import { useSelector } from 'react-redux';
import { selectTasksByCategory, selectCompletedTasks } from '../store/selectors';
import TaskItem from './TaskItem';

export default function TaskList({ categoryId }) {
  // Both selectors take (state, categoryId) — createSelector memoizes per categoryId argument.
  const tasks = useSelector((state) => selectTasksByCategory(state, categoryId));
  const completedCount = useSelector((state) => selectCompletedTasks(state, categoryId));

  return (
    <section className="task-list-section">
      <div className="task-list-header">
        <h2>Tasks</h2>
        <span className="progress-summary">
          {completedCount} / {tasks.length} completed
        </span>
      </div>

      {tasks.length === 0 ? (
        <p className="empty-state">No tasks in this category yet. Add one below to get started.</p>
      ) : (
        <ul className="task-list">
          {tasks.map((task) => (
            <TaskItem key={task.id} task={task} />
          ))}
        </ul>
      )}
    </section>
  );
}
