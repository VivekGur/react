import { useState } from 'react';
import './App.css';

function App() {
    return (
        <div className="App" >
            <h1>Hoc in React</h1>
            <HocRed cmp={Counter} />
            <HocGreen cmp={Counter} />
            <HocBlue cmp={Counter} />
        </div>
    );
}

function HocRed(p) {
    return <h2 style={{ backgroundColor: "red", width: 100 }}><p.cmp /></h2>
}
function HocGreen(p) {
    return <h2 style={{ backgroundColor: "green", width: 100 }}><p.cmp /></h2>
}
function HocBlue(p) {
    return <h2 style={{ backgroundColor: "blue", width: 100 }}><p.cmp /></h2>
}

function Counter() {
    const [count, setCount] = useState(0)

    return <div>
        <h3>{count}</h3>
        <button onClick={() => setCount(count + 1)} >Update</button>
    </div>
}


export default App;