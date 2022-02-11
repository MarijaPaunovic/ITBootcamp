import React, { Component } from 'react';

class ChildComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "shouldComponentUpdate Method"
        }

    }

    shouldComponentUpdate() {
        return false;
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({ name: "The name was change " })
        }, 3000)

        // Usual purpose
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((response) => response.json())
            .then((json) => console.log(json));
    }


    render() {
        return <div>
            <p>This is a {this.state.name}</p>
        </div>;
    }
}

export default ChildComponent;