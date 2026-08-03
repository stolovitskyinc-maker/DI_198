import React from 'react'
import AgeDisplay from './components/AgeDisplay'
import AgeControls from './components/AgeControls'

function App() {
  return (
    <div className="app-container">
      <div className="card">
        <h1>🎂 Age Tracker</h1>
        <AgeDisplay />
        <AgeControls />
        <p className="hint">
          Age updates asynchronously via Redux Thunk (simulated 1s delay).
        </p>
      </div>
    </div>
  )
}

export default App
