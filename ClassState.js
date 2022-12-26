import React from 'react';

class App extends React.Component {

    constructor() {
        super();
        this.state = {
            data: "vivek"
        }
    }
    apple() {
        this.setState({ data: "Gurjar" })
    }
    render() {
        return (
            <div>
                <h1>{this.data.state}</h1>
                <button onClick={() => this.apple()}>Update Data</button>
            </div>
        );
    }
}
export default App;