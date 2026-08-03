// Exercise 5: Using useEffect Hook with TypeScript in React
import { useEffect, useState } from 'react'

// Only the fields we actually use are typed here. You could type the
// full JSONPlaceholder response shape, but keeping it lean is fine
// as long as it matches what the UI reads.
interface User {
  id: number
  name: string
  email: string
  company: {
    name: string
  }
}

function UserList() {
  const [users, setUsers] = useState<User[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    // Guards against setting state after the component has unmounted.
    let isMounted = true

    async function fetchUsers() {
      try {
        setLoading(true)
        setError(null)

        const response = await fetch('https://jsonplaceholder.typicode.com/users')

        if (!response.ok) {
          throw new Error(`Request failed with status ${response.status}`)
        }

        const data: User[] = await response.json()

        if (isMounted) {
          setUsers(data)
        }
      } catch (err) {
        if (isMounted) {
          setError(err instanceof Error ? err.message : 'Something went wrong')
        }
      } finally {
        if (isMounted) {
          setLoading(false)
        }
      }
    }

    fetchUsers()

    // Cleanup function: runs if the component unmounts before the
    // fetch resolves, preventing a "state update on unmounted component" warning.
    return () => {
      isMounted = false
    }
  }, []) // empty dependency array = run once, on mount

  if (loading) {
    return <p>Loading users…</p>
  }

  if (error) {
    return <p className="error">Failed to load users: {error}</p>
  }

  return (
    <div>
      {users.map((user) => (
        <div className="card" key={user.id}>
          <p>
            <strong>{user.name}</strong>
          </p>
          <p className="muted">
            {user.email} · {user.company.name}
          </p>
        </div>
      ))}
    </div>
  )
}

export default UserList
