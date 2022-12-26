/*
Reuse Component in react js
with parent component send to data child component receive props data
*/

import './App.css';
import React from 'react'
import User from './User';
// import { Table } from 'react-bootstrap';
function App() {
    const users = [
        {
            Name: "Vivek", Email: "v@gmail.com", Contact: 9880

        },
        {
            Name: "sidhu", Email: "s@gmail.com", Contact: 9880
        },
        {
            Name: "sam", Email: "sam@gmail.com", Contact: 9880
        },
        {
            Name: "peter", Email: "p@gmail.com", Contact: 9880
        }
    ]
    return (
        <div className="App">
            <h1>Reuse Component with List</h1>
            {
                users.map((item, i) =>
                    <User data={item} />
                )
            }
        </div >
    )

}

export default App;

/*   Child component Reuse


function User(props) {
    return (
        <div>
            <span>{props.data.Name}</span>
            <span>{props.data.Email}</span>
            <span>{props.data.Contact}</span>
        </div>
    )
}
export default User;

*/