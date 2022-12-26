/*
React list with Bootstrap and unique key

key -- list ko handle krne k liye 'key' ka use kiya jata h jo
     ek unique id generate krta h jis s virtual dom perfectly type s work
     karta h isliye handle krne k liye key di jati h.

*/

import './App.css';
import { Table } from 'react-bootstrap';
function App() {
    const users = [
        { Name: "Vivek", Email: "v@gmail.com", Mobile: 111, },
        { Name: "sidhu", Email: "s@gmail.com", Mobile: 111, },
        { Name: "sam", Email: "sam@gmail.com", Mobile: 4533, },
        { Name: "peter", Email: "p@gmail.com", Mobile: 110, }
    ]
    return (
        <div className="App">
            <h1>List with Bootstrap Table</h1>
            <Table striped variant='dark' >
                <tbody>
                    <tr>
                        <td>Name</td>
                        <td>Email</td>
                        <td>Mobile</td>
                    </tr>
                    {
                        users.map((item, i) =>
                            item.Mobile === 111 ?
                                <tr key={i}>
                                    <td>{item.Name}</td>
                                    <td>{item.Email}</td>
                                    <td>{item.Mobile}</td>
                                </tr> : null
                        )
                    }
                </tbody>
            </Table >

        </div >
    )

}

export default App;