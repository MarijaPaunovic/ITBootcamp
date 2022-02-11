// .js ili .jsx svejedno je
import React, { Component } from "react";

class Counter extends Component {
    state = {
        counter: 1,
        imageUrl: "https://picsum.photos/200",
        tags: ["tag 1", "tag 2", "tag 3"],
    }
    // treba nam kad je obicna funkcija - umesto njega se koristi arrow funkcija
    // constructor() {
    //     super();
    //     console.log(`Constructor`, this);
    //     this.formatCount = this.formatCount.bind(this)
    // }

    handleIncrement = () => {
        console.log(`handleIncrement`);
        this.setState({ counter: this.state.counter + 1 })
    }

    styles = {
        fontSize: "30px",
        fontWeith: "bold",
        color: "green",
        // ...
    }

    // formatCount() {
    //     // destructuring
    //     const { counter } = this.state;
    //     console.log(counter);
    // }

    formatCount = () => {
        // console.log(this.state.counter);
        const { counter } = this.state;
        console.log(counter);
        return counter === 0 ? "Zero" : counter
    }

    handleDecrement = () => {
        this.setState({ counter: this.state.counter - 1 })
    }

    getClass = () => {
        return this.state.counter <= 0 ? "warning" : "success"
    }

    render() {
        return (
            // ili <div> tag
            // ili <React.Fragment> 
            // ili <>
            <div>
                <h2 style={this.styles}>Pozdrav iz Child komponente</h2>
                <p style={{ fontSize: 30, color: "blue" }}>Ja sam paragraf</p>

                <img src={this.state.imageUrl} alt="" />
                <br />

                {/* <button onClick={this.formatCount}>-</button> */}
                <button onClick={this.handleDecrement}>-</button>
                {/* <p>Count: {this.state.counter}</p> */}
                <p className={this.getClass()}> Nas counter je: {this.formatCount()}</p> {/* ili ovo dole */}
                <p className={this.state.counter <= 0 ? "warning" : "success"}> Nas counter je: {this.formatCount()}</p>
                <button onClick={this.handleIncrement}>+</button>

                <h1>Tagovi</h1>

                {/* <p>{this.state.tags[0]}</p>
                <p>{this.state.tags[1]}</p>
                <p>{this.state.tags[2]}</p> */}
                {
                    this.state.tags.map((tag, index) => (
                        <p key={index}>Ovo je moj tag: {tag}</p>
                    ))
                }
            </div>
        )
    }
}
export default Counter;