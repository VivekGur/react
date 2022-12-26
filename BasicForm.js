import './App.css';
import { useState } from 'react'
function App() {
  const [name, setName,] = useState("");
  const [tnc, setTnc] = useState(false);
  const [intrest, setIntrest] = useState("");

  function getFormData(e) { // parameter event(e) pass
    //console.log(name, tnc, intrest)
    e.preventDefault()
  }
  return (
    <div className="App">
      <h1>Handle From in react</h1>
      <form onSubmit={getFormData}>
        <input type="text" placeholder="enter name" onChange={(e) => setName(e.target.value)} /> <br /><br />
        <select onChange={(e) => setIntrest(e.target.value)}>
          <option>Select option</option>
          <option>Marvel</option>
          <option>DC</option>
        </select><br /><br />
        <input type="checkbox" onChange={(e) => setTnc(e.target.checked)} /><span>Accept Terms and Condition</span>
        <br /><br />
        <button type="submit">Submit</button>
      </form>
    </div >
  );
}

export default App;
