// Step 2: Generic List Component
import type { ReactNode, Key } from 'react'

// `<T,>` declares a generic type parameter for the component. The trailing
// comma is needed in .tsx files so the parser doesn't mistake `<T>` for the
// start of a JSX tag.
//
// This component doesn't know or care whether it's rendering books, movies,
// or anything else — it just needs an array of `items` and a `renderItem`
// function that knows how to turn one item into JSX. That's what makes it
// reusable across different data shapes.
interface ListProps<T> {
  items: T[]
  renderItem: (item: T) => ReactNode
  // Optional: lets callers supply a stable React key. Falls back to the
  // array index if not provided (fine for static lists, but a real key
  // like an id is preferred whenever the list can change).
  getKey?: (item: T, index: number) => Key
  emptyMessage?: string
}

function List<T>({ items, renderItem, getKey, emptyMessage = 'No items yet.' }: ListProps<T>) {
  if (items.length === 0) {
    return <p className="empty-state">{emptyMessage}</p>
  }

  return (
    <ul className="item-list">
      {items.map((item, index) => (
        <li key={getKey ? getKey(item, index) : index}>{renderItem(item)}</li>
      ))}
    </ul>
  )
}

export default List
