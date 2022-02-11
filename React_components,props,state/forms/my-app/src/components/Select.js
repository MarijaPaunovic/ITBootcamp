import React, { Component } from 'react';

class Select extends Component {
    state = {
        value: "Volvo",
    }

    handleChange = (change) => {
        this.setState({ value: change.target.value })
    }

    render() {
        return (
            <form>
                <select value={this.state.value} onChange={this.handleChange}>
                    <option value="Ford">Ford</option>
                    <option value="Audi">Audi</option>
                    <option value="Volvo">Volvo</option>
                </select>
            </form>
        );
    }
}

export default Select;