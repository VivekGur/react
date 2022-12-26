/*
input fields ko state k throug control krna 
*/

import './App.css';
import React, { useState } from 'react'

function App() {
    let [val, setVal] = useState("")
    let [item, setItem] = useState("")
    return (
        <div className="App" >
            <h1>Controlled component in React</h1>
            <input type="text" value={val} onChange={(e) => setVal(e.target.value)} />
            <input type="text" value={item} onChange={(e) => setItem(e.target.value)} />
            <h3>Value : {val}</h3>
            <h3>Item : {item}</h3>
        </div >
    )

}


export default App;