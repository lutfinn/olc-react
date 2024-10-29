import React, { useState, useEffect } from 'react'
import './App.css';

function Counter({getData}) {
  const [items, setItems] = useState([])
  useEffect(() => {
    console.log(`Sedang didalam useEffect. Number=${getData} `)
    setItems(getData)
  }, [getData])

  return (
    <div className="App">
      {items.map(item => (
        <h1>{item}</h1>
      ))}
    </div>
  );
}

function App() {
  const [count, setCount] = useState(0)
  const [color, setColor] = useState('salmon')
  const handleTambah = () => setCount(count + 1)
  const handleKurang = () => setCount(count - 1)
  const handleWarna = () => {
    const nextColor = color === 'salmon' ? 'blue' : 'salmon'
    setColor(nextColor)
  }

  const getData = () => {
    return [count, count + 1, count + 2]
  }

  return (
    <div style={{color}}>
      <button onClick={handleTambah}>Tambah</button>
      <button onClick={handleWarna}>Warna</button>
      <button onClick={handleKurang}>Kurang</button>

      <Counter getData={getData}/>
    </div>
  )
}

export default App;
