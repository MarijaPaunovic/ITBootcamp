import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import API from "../../config/api";
import RocketItem from './RocketItem';

const Rockets = () => {
    const [rockets, setRockets] = useState([]);

    useEffect(() => { }, []);

    useEffect(() => {
        API.get(`/rockets`)
            .then(res => {
                console.log(res.data);
                setRockets(res.data);
            })
            .catch(err => {
                console.log(err);
            })
    }, [])

    return (
        <div className='rockets-container'>

            {/* {rockets && rockets.map(rocket => (
                <Link key={rocket.rocket_id}>{rocket}</Link>
            ))} */}
            <ul>
                {rockets.length ? rockets.map(rocket => (
                    <RocketItem rocket={rocket} />
                )) : <div>Loading...</div>}
            </ul>
        </div>
    );
}

export default Rockets;