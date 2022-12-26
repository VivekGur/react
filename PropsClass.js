import React from 'react';
import './App.css';
import { Student1 } from './Student1';
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      name: 'Vivek'
    }
  }

  render() {
    return (
      <div className="App" >
        <h1>Props with class component in React:)</h1>
        <Student1 name={this.state.name} email='anil@class.com' />
        <button onClick={() => this.setState({ name: "Gurjar" })}>Update Name</button>
      </div>
    );
  }
}

export default App;
