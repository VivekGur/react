import './App.css';
import React from 'react';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            count: 0
        }
    }
    shouldComponentUpdate() {
        console.log("shouldcomponentupdate", this.state.count);
        if (this.state.count > 5 && this.state.count < 10) {
            return true;
        }

    }

    render() {
        return (
            <div className="App">
                <h1>should component Update {this.state.count}</h1>
                <button onClick={() => { this.setState({ count: this.state.count + 1 }) }}>Update Counter</button>
            </div>
        );
    }
}

export default App;