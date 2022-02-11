import React, { useEffect, useState } from 'react';

const Counter1 = () => {
    const [state, setState] = useState({ counter: 4, color: "blue" });
    const { counter, color } = state;

    // const [color, setColor] = useState("blue");
    // const [counter, setCounter] = useState(4);

    const handleDecrement = () => {
        // setCounter(prevState => prevState - 1);
        setState((prevState) => {
            // spread operator (...prevState)
            return { ...prevState, counter: prevState.counter - 1 }
        })
    }

    // ili ovako ili inline
    // const changeColor = () => {
    //     setState((prevState) => {
    //         return { ...prevState, color: "red" }
    //     })
    // }

    // useEffect(() => {
    //     console.log("Render")
    // });


    // componentDidMount
    // useEffect(() => {
    //     console.log("Render");
    // }, []) // prazan niz je kada je komponenta renderovana


    // useEffect(() => {
    //     console.log("Render");
    // }, [state.color])
    // ili
    useEffect(() => {
        console.log("Render");
        if (state.counter === 0) {
            alert("Stiglo je do 0")
        }
    }, [state.counter])

    // ComponentWillUnmount
    useEffect(() => {
        console.log("Hello World!");
        return () => {
            console.log("Do some cleanup")
        }
    }, [])

    return <div>
        <button onClick={handleDecrement} style={{ marginRight: "15px" }}>-</button>
        <span>{counter} </span>
        <span> {color}</span>
        <button style={{ marginLeft: "15px" }}>+</button>
        <button onClick={() => {
            setState(prevState => {
                return { ...prevState, color: "red" }
            })
        }}>Change color</button>
    </div>

};

export default Counter1;