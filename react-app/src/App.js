import React, { useState } from 'react'
import './App.css';

function App() {
  const [count, setCount] = useState(0)
  const handleTambah = () => setCount(count + 1)
  const handleKurang = () => setCount(count - 1)
  
  return (
    <div className="App">
      <button onClick={handleTambah}>Tambah</button>
      <button onClick={handleKurang}>Kurang</button>
      
      <h1>{count}</h1>
    </div>
  );
}

export default App;
