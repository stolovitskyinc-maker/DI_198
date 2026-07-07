import React from 'react';
import BuggyCounter from './BuggyCounter';
import ErrorBoundary from './ErrorBoundary';

function App() {
  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h1>React Error Boundary Simulations</h1>
      <p>Click on any counter to increase it. When it reaches 5, it will crash.</p>
      <hr />

      {/* Simulation 1 */}
      <div>
        <h3>Simulation 1: Two counters under one Error Boundary</h3>
        <p>If one crashes, the entire boundary replaces both counters.</p>
        <ErrorBoundary>
          <BuggyCounter />
          <BuggyCounter />
        </ErrorBoundary>
      </div>
      <hr />

      {/* Simulation 2 */}
      <div>
        <h3>Simulation 2: Each counter in its own Error Boundary</h3>
        <p>If one crashes, the other counter stays active and unaffected.</p>
        <ErrorBoundary>
          <BuggyCounter />
        </ErrorBoundary>
        <ErrorBoundary>
          <BuggyCounter />
        </ErrorBoundary>
      </div>
      <hr />

      {/* Simulation 3 */}
      <div>
        <h3>Simulation 3: Counter without an Error Boundary</h3>
        <p>If this crashes, the entire application unmounts (blank screen in production).</p>
        <BuggyCounter />
      </div>
    </div>
  );
}

export default App;
