import React, { useState } from 'react';

// Izvlaci se iz rendera zbog brzine ucitavanja app
const initialFunction = () => {
    console.log("run function")
    return 4;
}

const Counter = () => {
    // const [counter, setCounter] = useState(4);
    const [counter, setCounter] = useState(initialFunction());


    const handleDecrement = () => {
        setCounter(prevState => prevState - 1);
    }

    return <div>
        <button onClick={handleDecrement} style={{ marginRight: "15px" }}>-</button>
        <span>{counter}</span>
        <button onClick={() => { setCounter(counter + 1) }} style={{ marginLeft: "15px" }}>+</button>

    </div>
};
export default Counter;