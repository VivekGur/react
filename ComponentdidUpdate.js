import './App.css';
import React from 'react';

class App extends React.Component {
    constructor() {
        super();
        console.log("constructor");
        this.state = {
            name: "vivek"
        }

    }
    componentDidUpdate() {
        //state and props update hone k bad hi chalega
        console.log("componentdidupdate");
    }

    render() {
        console.log("render");
        return (
            <div className="App">
                <h1>Component Did Update</h1>
                <button onClick={() => { this.setState({ name: "gurjar" }) }}>Update Name</button>
            </div>
        );
    }
}

export default App;