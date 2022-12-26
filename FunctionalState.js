import './App.css';
import { useState } from 'react';
function App() {
    const [data, setData] = useState("Vivek");
    function updateData() {
        setData("Gurjar");
    }
    return (
        <div className="App">
            <h1>{data}</h1>
            <button onClick={updateData}>Update Data!</button>
        </div>
    );
}


export default App;
