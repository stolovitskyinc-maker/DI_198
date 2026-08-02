import { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTask } from '../store/tasksSlice';
import { selectAllCategories } from '../store/selectors';

export default function AddTaskForm({ defaultCategoryId }) {
  const dispatch = useDispatch();
  const categories = useSelector(selectAllCategories);

  const [title, setTitle] = useState('');
  const [categoryId, setCategoryId] = useState(
    defaultCategoryId !== 'all' ? defaultCategoryId : categories[0]?.id
  );

  const handleSubmit = useCallback(
    (event) => {
      event.preventDefault();
      const trimmed = title.trim();
      if (!trimmed || !categoryId) return;
      dispatch(addTask({ title: trimmed, categoryId }));
      setTitle('');
    },
    [dispatch, title, categoryId]
  );

  return (
    <form className="add-task-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add a new task…"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        aria-label="New task title"
      />
      <select value={categoryId} onChange={(e) => setCategoryId(e.target.value)} aria-label="Task category">
        {categories.map((c) => (
          <option key={c.id} value={c.id}>{c.name}</option>
        ))}
      </select>
      <button type="submit" className="btn">Add task</button>
    </form>
  );
}
