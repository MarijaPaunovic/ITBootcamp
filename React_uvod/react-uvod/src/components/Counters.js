import React, { Component } from "react";
import ChildCounter from "./ChildCounter";


class Counters extends Component {
    state = {
        counters: [
            { id: 0, value: 0 },
            { id: 1, value: 1 },
            { id: 2, value: 2 },
            { id: 3, value: 3 },
        ]
    }

    handleIncrement = id => {
        // console.log(id + " - u Counters, handleIncrement se nalazim");

        // Spread operator
        // const counters = [...this.state.counters];
        // const counter = { ...this.getSnapshotBeforeUpdate.counters[0], name: "Child" }
        this.setState({
            counters: this.state.counters.map((item) => {
                // console.log(item);
                return item.id === id ? { ...item, value: item.value + 1 } : item;
            }),
        });
    };

    handleDelete = id => {
        console.log(`handleDelete`, id);
        // 1 var.
        this.setState({
            counters: this.state.counters.filter((counter) => counter.id !== id)
            // filter vraca sve sto ne spada u uslov, pa ako stavimo item.id === id onda ce samo jednu stvar na ekranu da ostavi
        })
        // ili
        // 2 var.
        // this.setState((prevState) => {
        //     return {
        //         ...prevState,
        //         counters: prevState.counters.filter((counter) => {
        //             counter.id !== id;
        //         })
        //     }
        // })
    }

    render() {
        return (
            <div>
                {this.state.counters.map((counter) => (
                    // <ChildCounter 
                    // key={counter.id} 
                    // id={counter.id} 
                    // value={counter.value} 
                    // counter={counter} 
                    // onIncrement={this.handleIncrement}
                    // />
                    <ChildCounter
                        key={counter.id}
                        counter={counter} // prosledjen ceo objekat
                        onIncrement={this.handleIncrement}
                        onDelete={this.handleDelete}
                    />
                ))}
            </div>
        )
    }
}
export default Counters;