// Exercise 2: Creating a React Component with TypeScript

// 1. Define an interface for the component's props.
interface GreetingProps {
  name: string
  messageCount: number
}

// 2. Build the component using the typed props.
//    Destructuring here means TypeScript enforces both props at every call site.
function Greeting({ name, messageCount }: GreetingProps) {
  return (
    <div className="card">
      <p>
        Hello, <strong>{name}</strong>! 👋
      </p>
      <p className="muted">
        You have {messageCount} unread message{messageCount === 1 ? '' : 's'}.
      </p>
    </div>
  )
}

export default Greeting
