// Exercise 3: Using useState Hook with TypeScript in React
import { useState } from 'react'

// A union type is a nice way to model "the last action performed"
// since it restricts the value to a known, finite set of strings.
type LastAction = 'increment' | 'decrement' | 'none'

function Counter() {
  // useState<number> makes the type explicit; TypeScript could also
  // infer it from the initial value (0), but being explicit is a good habit.
  const [count, setCount] = useState<number>(0)
  const [lastAction, setLastAction] = useState<LastAction>('none')

  const increment = (): void => {
    setCount((prev) => prev + 1)
    setLastAction('increment')
  }

  const decrement = (): void => {
    setCount((prev) => prev - 1)
    setLastAction('decrement')
  }

  return (
    <div className="card">
      <h3>Count: {count}</h3>
      <button onClick={increment}>+ Increment</button>
      <button onClick={decrement}>- Decrement</button>
      <p className="muted">Last action: {lastAction}</p>
    </div>
  )
}

export default Counter
