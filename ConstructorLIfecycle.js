// Constructor First lifecycle method 
import './App.css';
import React from 'react';

class App extends React.Component {
    constructor() {

        super(); // parent constructor hota h
        this.state = {
            data: "vivek"
        }
    }
    render() {

        return (

            <h1>Constructor first life cycle method {this.state.data}</h1>

        );
    }
}

export default App;