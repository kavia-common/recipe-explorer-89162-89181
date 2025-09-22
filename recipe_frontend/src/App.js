import React, { useState, useEffect } from 'react';
import './App.css';
import SignIn from './components/SignIn';

// PUBLIC_INTERFACE
function App() {
  const [theme, setTheme] = useState('light');

  // Effect to apply theme to document element
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  // PUBLIC_INTERFACE
  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  const handleSubmit = (data) => {
    // placeholder for integration
    // eslint-disable-next-line no-console
    console.log('App received sign-in submit', data);
  };

  return (
    <div className="App">
      <header className="App-header" style={{ paddingTop: 72 }}>
        <button 
          className="theme-toggle" 
          onClick={toggleTheme}
          aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
        >
          {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
        </button>
        <SignIn onSubmit={handleSubmit} />
      </header>
    </div>
  );
}

export default App;
