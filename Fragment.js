//Fragment use in React paatern multiple element and component handle this.


import './App.css';
import React from 'react'
import Cols from './Cols';
// import { Table } from 'react-bootstrap';
function App() {

    return (
        <div className="App">
            <h1>React Fragment</h1>
            <table>
                <tbody>
                    <tr>
                        <Cols />
                    </tr>
                </tbody>
            </table>
        </div >
    )

}

export default App;

/* child component use in fragment
and return value

function cols() {
    return (
        <>
            <td>Vivek</td>
            <td>Gurjar</td>
        </>
    )
}
export default cols;

   


*/