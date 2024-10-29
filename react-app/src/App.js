import React, { useState, useEffect } from 'react'
import './App.css';

function Counter() {
  const [count, setCount] = useState(0)
  const [color, setColor] = useState('salmon')
  const handleTambah = () => setCount(count + 1)
  const handleKurang = () => setCount(count - 1)
  const handleWarna = () => {
    const nextColor = color === 'salmon' ? 'blue' : 'salmon'
    setColor(nextColor)
  }

  useEffect(() => {
    console.log(`Sedang didalam useEffect. Count = ${count}`)

    return () => {
      console.log(`Tugasku membersihkan semuanya`)
    }
  }, [count])

  return (
    <div className="App">
      <button onClick={handleTambah}>Tambah</button>
      <button onClick={handleWarna}>Warna</button>
      <button onClick={handleKurang}>Kurang</button>
      <h1 style={{ color }}>{count}</h1>
    </div>
  );
}

function App() {
  return (
    <div>
      <Counter />
    </div>
  )
}

export default App;
