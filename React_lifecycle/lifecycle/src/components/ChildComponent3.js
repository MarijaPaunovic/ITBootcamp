import React, { Component } from 'react'

class ChildComponent3 extends Component {
    state = {
        name: "Nebojsa",
        newName: ""
    }

    handleChange = (e) => {
        this.setState({ newName: e.target.value })
    };

    handleSubmit = (e) => {
        e.preventDefault();

        this.setState({ name: this.state.newName })
    };

    // Svrha metode je da proveri da li treba komponenta da se updejtuje ili ne
    // Da nema nje komp. bi se non-stop renderovala
    // Donosi veliku optimizaciju kod vecih app
    shouldComponentUpdate(nextProps, nextState) {
        // console.log(nextProps);
        // console.log(nextState);
        if (this.state.name === nextState.name) {
            console.log("this state and next state are the same");
            return false;
        }
        console.log("they are not the same");

        return true;
    };

    render() {
        return (
            <div>
                {this.state.name}
                <form onSubmit={this.handleSubmit}>
                    <input type="text" onChange={this.handleChange} />
                    <button type='submit'>Submit</button>
                </form>
            </div>
        );
    }
}

export default ChildComponent3;