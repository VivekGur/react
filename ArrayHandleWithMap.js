/*
Array handle with map functon
map and for loop 
array with object
*/


import './App.css';

function App() {
    // const student = ['Vivek', 'sidhu', 'sam', 'peter'];
    const student = [
        { Name: "Vivek", Email: "v@gmail.com", Mobile: 123, },
        { Name: "sidhu", Email: "s@gmail.com", Mobile: 11122, },
        { Name: "sam", Email: "sam@gmail.com", Mobile: 4533, },
        { Name: "peter", Email: "p@gmail.com", Mobile: 22331, }
    ]
    return (
        <div className="App">
            <h1>React Array Listing with map Function</h1>
            <table border='1'>
                <tr>
                    <td>Name</td>
                    <td>Email</td>
                    <td>Mobile</td>
                </tr>
                {
                    student.map((data) =>
                        <tr>
                            <td>{data.Name}</td>
                            <td>{data.Email}</td>
                            <td>{data.Mobile}</td>
                        </tr>
                    )
                }
            </table>
        </div >
    )

}

export default App;