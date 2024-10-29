import React, { createContext, useState } from 'react'
import './App.css';
import ContextComponent from  './ContextComponent';

export const ThemeContext = createContext()

function App() {
  const [theme, setTheme] = useState('light')

  const handleToggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return (
    <ThemeContext.Provider value={theme}>
      <div className="App">
        <button onClick={handleToggleTheme}>Change Theme</button>

        <ContextComponent />
      </div>
    </ThemeContext.Provider>

  );
}

export default App;
