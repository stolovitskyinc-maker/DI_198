import { createSelector } from '@reduxjs/toolkit';

// Base selectors (unmemoized, just pull raw slices out of state)
const selectTasksState = (state) => state.tasks.items;
const selectCategoriesState = (state) => state.categories.items;

// A selector factory-friendly selector: returns tasks for a given categoryId.
// Usage: useSelector((state) => selectTasksByCategory(state, categoryId))
export const selectTasksByCategory = createSelector(
  [selectTasksState, (state, categoryId) => categoryId],
  (tasks, categoryId) => {
    if (!categoryId || categoryId === 'all') return tasks;
    return tasks.filter((task) => task.categoryId === categoryId);
  }
);

// Returns the count of completed tasks (optionally scoped to a category).
// Usage: useSelector((state) => selectCompletedTasks(state, categoryId))
export const selectCompletedTasks = createSelector(
  [selectTasksByCategory],
  (tasks) => tasks.filter((task) => task.completed).length
);

// Returns category details for a given id.
// Usage: useSelector((state) => selectCategoryById(state, categoryId))
export const selectCategoryById = createSelector(
  [selectCategoriesState, (state, categoryId) => categoryId],
  (categories, categoryId) => categories.find((c) => c.id === categoryId) || null
);

// All categories (simple pass-through, exported for convenience)
export const selectAllCategories = selectCategoriesState;
