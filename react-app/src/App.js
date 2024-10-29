import React, { createContext, useState } from 'react'
import './App.css';
import ContextComponent from  './ContextComponent';

export const ThemeContext = createContext()

function App() {
  const [darkTheme, setDarkTheme] = useState(false)

  const handleToggleTheme = () => {
    setDarkTheme(!darkTheme)
  }

  return (
    <ThemeContext.Provider value={darkTheme}>
      <div className="App">
        <button onClick={handleToggleTheme}>Change Theme</button>

        <ContextComponent />
      </div>
    </ThemeContext.Provider>

  );
}

export default App;
