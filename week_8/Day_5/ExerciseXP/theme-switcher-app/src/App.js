import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';
import ThemeSwitcher from './ThemeSwitcher';
import CharacterCounter from './CharacterCounter';

function App() {
  const { theme } = useContext(ThemeContext);

  const appStyle = {
    backgroundColor: theme === 'light' ? '#ffffff' : '#1a1a1a',
    color: theme === 'light' ? '#000000' : '#ffffff',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'all 0.3s ease',
  };

  return (
    <div style={appStyle}>
      <h1>Current Theme: {theme}</h1>
      <ThemeSwitcher />
      <h1>Character Counter</h1>
      <CharacterCounter />
    </div>
  );
}

export default App;