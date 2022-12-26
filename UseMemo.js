// unwanted component update and re rendering  rokne k liye usememo ka use 
//kiya jata h. and application ki perfomance improve karne k liye use hota h.

import './App.css';
import React, { useState, useMemo } from 'react'

function App() {
    const [count, setCount] = useState(0)
    const [item, setitem] = useState(10)

    const multiCountMemo = useMemo(function multiCount() {
        console.warn("multiCount");
        return count * 5
    }, [count])

    return (
        <div className="App" >
            <h1>Use Memo Hook in React</h1>
            <h2>Count : {count}</h2>
            <h1>Item : {item}</h1>
            <h2>{multiCountMemo}</h2>
            <button onClick={() => setCount(count + 1)} >Update count</button>
            <button onClick={() => setitem(item * 10)} >Update Item</button>
        </div >
    )
}


export default App;