import React, { useState, useEffect } from 'react';
import API from "../../config/api";
import MissionDetail from './MissionDetailes';

const Missions = () => {
    const [state, setState] = useState([]);

    useEffect(() => {
        API.get(`/missions`)
            .then(res => {
                console.log(res.data);
                setState(res.data);
            })
            .catch(err => {
                console.log(err);
            })
    }, [])

    return (
        <div className='rockets-container'>
            <h2>Missions</h2>
            {state.map((mission) => (
                <MissionDetail key={mission.mission_id} mission={mission} />
            ))}
        </div>
    );
}

export default Missions;