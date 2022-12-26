/*
Nested LIst with Nested Array

means parent k andar child
*/

import './App.css';
import { Table } from 'react-bootstrap';
function App() {
    const users = [
        {
            Name: "Vivek", Email: "v@gmail.com", Address: [
                { HouseNo: 11, City: 'Indore', Country: 'India' },
                { HouseNo: 34, City: 'Bhopal', Country: 'India' },
                { HouseNo: 43, City: 'Noida', Country: 'India' },
                { HouseNo: 91, City: 'Hyderabad', Country: 'India' }
            ]
        },
        {
            Name: "sidhu", Email: "s@gmail.com", Address: [
                { HouseNo: 14, City: 'Indore', Country: 'India' },
                { HouseNo: 34, City: 'Bhopal', Country: 'India' },
                { HouseNo: 43, City: 'Noida', Country: 'India' },
                { HouseNo: 94, City: 'Hyderabad', Country: 'India' }
            ]
        },
        {
            Name: "sam", Email: "sam@gmail.com", Address: [
                { HouseNo: 16, City: 'Indore', Country: 'India' },
                { HouseNo: 34, City: 'Bhopal', Country: 'India' },
                { HouseNo: 43, City: 'Noida', Country: 'India' },
                { HouseNo: 97, City: 'Hyderabad', Country: 'India' }
            ]
        },
        {
            Name: "peter", Email: "p@gmail.com", Address: [
                { HouseNo: 13, City: 'Indore', Country: 'India' },
                { HouseNo: 34, City: 'Bhopal', Country: 'India' },
                { HouseNo: 43, City: 'Noida', Country: 'India' },
                { HouseNo: 99, City: 'Hyderabad', Country: 'India' }
            ]
        }
    ]
    return (
        <div className="App">
            <h1>List with Nested Array</h1>
            <Table>
                <tbody>
                    <tr>
                        <td>S.N</td>
                        <td>Name</td>
                        <td>Email</td>
                        <td>Address</td>
                    </tr>
                </tbody>
                {
                    users.map((item, i) =>
                        <tr key={i}>
                            <td>{i + 1}</td>
                            <td>{item.Name}</td>
                            <td>{item.Email}</td>
                            <td>
                                <Table striped variant='dark'>
                                    <tbody>
                                        {
                                            item.Address.map((data) =>
                                                <tr key={i}>
                                                    <td>{data.HouseNo}</td>
                                                    <td>{data.City}</td>
                                                    <td>{data.Country}</td>
                                                </tr>
                                            )}
                                    </tbody>
                                </Table>

                            </td>
                        </tr>
                    )
                }
            </Table>
        </div >
    )

}

export default App;