import React from 'react';
import UserFavoriteAnimals from './UserFavoriteAnimals'; // From Exercise 2
import Exercise from './Exercise3';                       // From Exercise 3

function App() {
  // --- Exercise 1 Data ---
  const myelement = <h1>I Love JSX!</h1>;
  const sum = 5 + 5;

  // --- Exercise 2 Data ---
  const user = {
    firstName: 'Bob',
    lastName: 'Dylan',
    favAnimals: ['Horse', 'Turtle', 'Elephant', 'Monkey']
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      
      {/* ========================================================= */}
      {/* EXERCISE 1 OUTPUT */}
      {/* ========================================================= */}
      <section style={{ margin: '40px 0' }}>
        <h2>Exercise 1: with JSX</h2>
        <p>Hello World!</p>
        {myelement}
        <p>React is {sum} times better with JSX</p>
      </section>

      <hr style={{ border: '2px solid #ccc', margin: '40px 0' }} />

      {/* ========================================================= */}
      {/* EXERCISE 2 OUTPUT */}
      {/* ========================================================= */}
      <section style={{ margin: '40px 0' }}>
        <h2>Exercise 2: Object & Props</h2>
        <h3>{user.firstName}</h3>
        <h3>{user.lastName}</h3>
        <UserFavoriteAnimals favAnimals={user.favAnimals} />
      </section>

      <hr style={{ border: '2px solid #ccc', margin: '40px 0' }} />

      {/* ========================================================= */}
      {/* EXERCISE 3 OUTPUT */}
      {/* ========================================================= */}
      <section style={{ margin: '40px 0' }}>
        <h2>Exercise 3: HTML Tags & Styling</h2>
        <Exercise />
      </section>

    </div>
  );
}

export default App;
