import Greeting from './components/Greeting'
import Counter from './components/Counter'
import UserCard from './components/UserCard'
import UserList from './components/UserList'

function App() {
  return (
    <>
      <h1>React + TypeScript Exercises</h1>

      <section>
        <h2>Exercise 2 — Greeting (typed props)</h2>
        <Greeting name="Ada" messageCount={3} />
      </section>

      <section>
        <h2>Exercise 3 — Counter (typed useState)</h2>
        <Counter />
      </section>

      <section>
        <h2>Exercise 4 — UserCard (optional props)</h2>
        {/* All props provided */}
        <UserCard name="Grace Hopper" age={85} role="Admiral" />
        {/* Some props omitted — defaults kick in */}
        <UserCard name="Alan Turing" />
        {/* No props at all — every default applies */}
        <UserCard />
      </section>

      <section>
        <h2>Exercise 5 — UserList (useEffect + fetch)</h2>
        <UserList />
      </section>
    </>
  )
}

export default App
