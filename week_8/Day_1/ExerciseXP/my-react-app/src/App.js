import React from 'react';

function App() {
  // Step 2: Create the constant variable with JSX
  const myelement = <h1>I Love JSX!</h1>;

  // Step 3: Create the constant variable named sum
  const sum = 5 + 5;

  return (
    <div>
      {/* Step 1: Display Hello World! message */}
      <p>Hello World!</p>

      {/* Step 2: Render the myelement JSX variable */}
      {myelement}

      {/* Step 3: Render the sentence with the dynamic sum value */}
      <p>React is {sum} times better with JSX</p>
    </div>
  );
}

export default App;
