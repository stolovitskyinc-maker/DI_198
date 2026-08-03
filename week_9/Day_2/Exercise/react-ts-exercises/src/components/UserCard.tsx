// Exercise 4: Creating a React Component with Optional Props

// The `?` marks each prop as optional, so callers can omit them.
interface UserCardProps {
  name?: string
  age?: number
  role?: string
}

function UserCard({ name, age, role }: UserCardProps) {
  // Default values are applied here rather than in the destructuring
  // above, just to show a second valid pattern (`??` handles 0/''
  // more predictably than `||` in general, though not needed for these).
  const displayName = name ?? 'Anonymous User'
  const displayAge = age ?? 'Unknown'
  const displayRole = role ?? 'Guest'

  return (
    <div className="card">
      <p>
        <strong>{displayName}</strong>
      </p>
      <p className="muted">
        Age: {displayAge} · Role: {displayRole}
      </p>
    </div>
  )
}

export default UserCard
