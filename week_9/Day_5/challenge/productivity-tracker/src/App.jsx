import { useState } from 'react';
import CategorySelector from './components/CategorySelector';
import TaskList from './components/TaskList';
import AddTaskForm from './components/AddTaskForm';
import './App.css';

export default function App() {
  const [selectedCategoryId, setSelectedCategoryId] = useState('all');

  return (
    <div className="app-shell">
      <header className="app-header">
        <h1>Productivity Tracker</h1>
        <p className="subtitle">Log daily tasks, group them by category, and track progress to done.</p>
      </header>

      <main className="app-main">
        <CategorySelector selectedCategoryId={selectedCategoryId} onSelect={setSelectedCategoryId} />
        <AddTaskForm defaultCategoryId={selectedCategoryId} />
        <TaskList categoryId={selectedCategoryId} />
      </main>
    </div>
  );
}
