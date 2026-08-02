import { createSlice, nanoid } from '@reduxjs/toolkit';

// Each category: { id, name, color }
const initialState = {
  items: [
    { id: 'cat-work', name: 'Work', color: '#5B7FDE' },
    { id: 'cat-health', name: 'Health', color: '#4CAF7D' },
    { id: 'cat-personal', name: 'Personal', color: '#E08A4C' },
  ],
};

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    // Add a new category. Expects { name, color }
    addCategory: {
      reducer(state, action) {
        state.items.push(action.payload);
      },
      prepare({ name, color }) {
        return {
          payload: {
            id: nanoid(),
            name,
            color: color || '#888888',
          },
        };
      },
    },

    // Edit an existing category. Expects { id, changes: { name?, color? } }
    editCategory(state, action) {
      const { id, changes } = action.payload;
      const category = state.items.find((c) => c.id === id);
      if (category) {
        Object.assign(category, changes);
      }
    },

    // Remove a category by id
    deleteCategory(state, action) {
      const id = action.payload;
      state.items = state.items.filter((c) => c.id !== id);
    },
  },
});

export const { addCategory, editCategory, deleteCategory } = categoriesSlice.actions;
export default categoriesSlice.reducer;
