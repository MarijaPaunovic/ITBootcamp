import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import API from "../../config/api";

const Launches = () => {
    const [state, setState] = useState([]);

    // prima dva parametra
    //  arrow f-ju i niz
    // prazan niz def onMounting
    // neki state u nizu, definise pozivanje arrow f-je kada se taj state promeni
    useEffect(() => { }, []);

    useEffect(() => {
        API.get("/launches").then((res) => {
            console.log(res.data);
            setState(res.data);
        });
    }, []);

    return (
        <div>
            <h2>Launches</h2>
            {state &&
                state.map((launch) => (
                    <Link to={`/launchdetails/${launch.flight_number}`} key={launch.id}>
                        {launch.mission_name}
                    </Link>
                ))}
        </div>
    );
};

export default Launches;