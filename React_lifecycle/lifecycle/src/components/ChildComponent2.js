import React, { Component } from 'react';

class ChildComponent2 extends Component {

    componentWillUnmount() {
        alert(`This component will be unmount`)
    }

    render() {
        return <>I am child component</>;
    }
}

export default ChildComponent2;