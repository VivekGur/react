//ComponentDidMount life cycle method

import './App.css';
import React from 'react';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            name: "vivek"
        }
    }
    componentDidMount() {
        console.log("componentDidMount");
    }
    render() {
        console.log("render");
        return (
            <div>
                <h1>componentDidMount lifecycle method {this.state.name}</h1>
                <button onClick={() => { this.setState({ name: "vivek" }) }}>Update Name</button>
            </div>
        );
    }
}

export default App;