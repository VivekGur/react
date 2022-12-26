//parent component se state ki help s props update kiye h 

import './App.css';
import React, { useEffect, useState } from 'react';

function User(props) {

    useEffect(() => {
        console.log("count is " + props.count);
    }, [props.count])


    return (
        <div className="App">
            <h1>useEffect Hook with Condition in React Js</h1>
            <h1>Count Props : {props.count}</h1>
            <h1>Data Props : {props.data}</h1>

        </div >
    )

}

export default User;

/*
import './App.css';
import React, { useEffect, useState } from 'react';
import User from './User';

function App() {
  const [data, setData] = useState(10)
  const [count, setCount] = useState(100)


  return (
    <div className="App">
      <h1>useEffect Hook with Condition in React Js</h1>
      <User count={count} data={data} />

      <button onClick={() => setCount(count + 1)}>Update Count</button>
      <button onClick={() => setData(data + 1)}>Update Data</button>
    </div >
  )

}

export default App;

*/