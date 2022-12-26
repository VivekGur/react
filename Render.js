//Render lifecycle method in class component
import React from 'react';

class Render extends React.Component {
    render() {
        console.log("Render method", this.props);
        return (
            <div>
                <h1>Render Component </h1>
            </div>
        )
    }
}

export default Render;