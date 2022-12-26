import './App.css';
import React, { PureComponent } from 'react'
import User from './User';
class App extends PureComponent {
    constructor() {
        super();
        this.state = { count: 1 }
    }
    render() {
        //console.warn("check Re-rendering");
        return (
            <div className="App" >
                <h1>Pure Component in React {this.state.count}</h1>
                <User count={this.state.count} />
                <button onClick={() => this.setState({ count: this.state.count + 1 })}>
                    Update Count</button>
            </div >
        )
    }
}

export default App;


/*
   child component User.js
   
import './App.css';
import React, { PureComponent } from 'react'
class User extends PureComponent {

    render() {
        console.warn("User component re rendering")

        return (
            <div className="App" >
                <h1>User Component{this.props.count}</h1>
            </div >
        )
    }
}

export default User;


*/