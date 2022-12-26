import './App.css';
import React from 'react';
import Child from './Child';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            show: true
        }
    }

    render() {
        return (
            <div className="App">
                {
                    this.state.show ? <Child /> : <h1>Child Component Remove</h1>
                }

                <button onClick={() => this.setState({ show: !this.state.show })}>Toggle Child Componennt</button>
            </div>
        );
    }
}

export default App;

//Create a new component Child //

/*import React from 'react';

class Child extends React.Component {
    componentWillUnmount() {
        console.log("componentWillUnmount Called");
    }

    render() {
        return (
            <div className="App">
                <h1>Child Component WILL unmount</h1>
            </div>
        );
    }
}

export default Child; */