import React from 'react'
import Spinner from "../assets/spinner.svg";

const Loading = () => {
    return (
        <div style={{ display: "flex", justifyContent: "center" }}>
            <img src={Spinner} alt="" />
        </div>
    );
}

export default Loading;