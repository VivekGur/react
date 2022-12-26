import './App.css';
import Student from './Student';
import { useState } from 'react'; //data store in state
function App() {
    const [name, setName] = useState("Vivek") //by default value
    return (
        <div className="App">
            <h1>Props in React:)</h1>
            <Student name={name} />

            <button onClick={() => { setName("Gurjar") }}>Update Name</button>
        </div>
    );
}


export default App;

/*
//receive this props 
function Student(props) {
    return (
        <div style={{ backgroundColor: "skyblue", margin: 10 }}>
            <h1>Hello {props.name}</h1>

        </div>
    )
}

export default Student;
*/
