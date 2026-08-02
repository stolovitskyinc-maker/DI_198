import { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { editTask, deleteTask, updateTaskProgress, toggleTaskCompleted } from '../store/tasksSlice';
import { selectCategoryById } from '../store/selectors';

export default function TaskItem({ task }) {
  const dispatch = useDispatch();
  const category = useSelector((state) => selectCategoryById(state, task.categoryId));

  const [isEditing, setIsEditing] = useState(false);
  const [draftTitle, setDraftTitle] = useState(task.title);

  // useCallback keeps these handlers referentially stable across re-renders,
  // which matters here because TaskItem is rendered inside a mapped list in TaskList.
  const handleToggleCompleted = useCallback(() => {
    dispatch(toggleTaskCompleted(task.id));
  }, [dispatch, task.id]);

  const handleProgressChange = useCallback(
    (event) => {
      dispatch(updateTaskProgress({ id: task.id, progress: Number(event.target.value) }));
    },
    [dispatch, task.id]
  );

  const handleDelete = useCallback(() => {
    dispatch(deleteTask(task.id));
  }, [dispatch, task.id]);

  const handleStartEdit = useCallback(() => {
    setDraftTitle(task.title);
    setIsEditing(true);
  }, [task.title]);

  const handleSaveEdit = useCallback(() => {
    const trimmed = draftTitle.trim();
    if (trimmed) {
      dispatch(editTask({ id: task.id, changes: { title: trimmed } }));
    }
    setIsEditing(false);
  }, [dispatch, task.id, draftTitle]);

  const handleCancelEdit = useCallback(() => {
    setIsEditing(false);
  }, []);

  return (
    <li className={`task-item ${task.completed ? 'task-item--done' : ''}`}>
      <label className="task-checkbox">
        <input type="checkbox" checked={task.completed} onChange={handleToggleCompleted} />
        <span className="checkmark" aria-hidden="true" />
      </label>

      <div className="task-body">
        {isEditing ? (
          <div className="task-edit-row">
            <input
              type="text"
              value={draftTitle}
              onChange={(e) => setDraftTitle(e.target.value)}
              autoFocus
              onKeyDown={(e) => {
                if (e.key === 'Enter') handleSaveEdit();
                if (e.key === 'Escape') handleCancelEdit();
              }}
            />
            <button type="button" className="btn btn--small" onClick={handleSaveEdit}>Save</button>
            <button type="button" className="btn btn--small btn--ghost" onClick={handleCancelEdit}>Cancel</button>
          </div>
        ) : (
          <div className="task-title-row">
            <span className="task-title">{task.title}</span>
            {category && (
              <span className="task-category-badge" style={{ '--chip-color': category.color }}>
                {category.name}
              </span>
            )}
          </div>
        )}

        <div className="task-progress-row">
          <input
            type="range"
            min="0"
            max="100"
            step="5"
            value={task.progress}
            onChange={handleProgressChange}
            aria-label={`Progress for ${task.title}`}
          />
          <span className="task-progress-value">{task.progress}%</span>
        </div>
      </div>

      {!isEditing && (
        <div className="task-actions">
          <button type="button" className="icon-btn" onClick={handleStartEdit} aria-label="Edit task">✎</button>
          <button type="button" className="icon-btn" onClick={handleDelete} aria-label="Delete task">✕</button>
        </div>
      )}
    </li>
  );
}
