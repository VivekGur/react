/*
data send to child to parent component
*/

import './App.css';
import React from 'react'
import User from './User';
// import { Table } from 'react-bootstrap';
function App() {

    function parentAlert(data) {
        alert(data);  //child data receive
    }
    return (
        <div className="App">
            <h1>React Send data Child to parent component</h1>
            <User alert={parentAlert} /> {/*function call */}
        </div >
    )

}

export default App;

/*  child component
function User(p) {
    const data = "Vivek Gurjar" // variable define
    return (

        < div >
            <h1>User Name : </h1>
            <button onClick={() => p.alert(data)} >Click Me!</button> {/*data send to parent component */}
      //      </div >
//            )
  //      }

    //    export default User;

   

//* /