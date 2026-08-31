import { useState } from 'react'

export default function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="container">
      <h1>🚀 React + Docker</h1>
      <p>This page is served from inside a Docker container.</p>
      <button onClick={() => setCount((c) => c + 1)}>
        Clicked {count} times
      </button>
    </div>
  )
}
