import { useSelector } from 'react-redux';
import { selectAllCategories } from '../store/selectors';

// Lets the user pick which category's tasks to view.
// selectedCategoryId / onSelect are lifted up to App so TaskList can react to the same value.
export default function CategorySelector({ selectedCategoryId, onSelect }) {
  const categories = useSelector(selectAllCategories);

  return (
    <div className="category-selector" role="tablist" aria-label="Filter tasks by category">
      <button
        type="button"
        role="tab"
        aria-selected={selectedCategoryId === 'all'}
        className={`chip ${selectedCategoryId === 'all' ? 'chip--active' : ''}`}
        onClick={() => onSelect('all')}
      >
        All
      </button>

      {categories.map((category) => (
        <button
          key={category.id}
          type="button"
          role="tab"
          aria-selected={selectedCategoryId === category.id}
          className={`chip ${selectedCategoryId === category.id ? 'chip--active' : ''}`}
          style={{ '--chip-color': category.color }}
          onClick={() => onSelect(category.id)}
        >
          <span className="chip-dot" style={{ background: category.color }} />
          {category.name}
        </button>
      ))}
    </div>
  );
}
