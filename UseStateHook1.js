import './App.css';
import React, { useState } from 'react'

function App() {
  const [data, setData] = useState("Vivek")
  return (
    <div className="App">
      <h1>Hooks in React Js</h1>
      <h2>{data}</h2>
      <button onClick={() => setData("Gurjar")}>Update Data</button>
    </div>
  )

}

export default App;