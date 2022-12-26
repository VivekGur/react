//forwardRef  The forwardRef method in React allows parent 
//components to move down (or “forward”) refs to their children.

import './App.css';
import React, { useRef } from 'react'
import User from './User';
function App() {
    let inputRef = useRef(null)
    function updateinput() {
        inputRef.current.value = "1000"
        inputRef.current.style.color = "red"
    }
    return (
        <div className="App" >
            <h1>forwardRef in React</h1>
            <User ref={inputRef} />
            <button onClick={updateinput} >Update InputBox</button>
        </div >
    )

}


export default App;

/*
import React, { forwardRef } from 'react'

function User(props, ref) {
    return (
        <div>
            <input type="text" ref={ref} />
        </div>
    )
}

export default forwardRef(User);

*/