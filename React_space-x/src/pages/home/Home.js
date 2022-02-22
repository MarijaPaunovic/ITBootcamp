import React, { useState, useEffect } from 'react';
import API from "../../config/api";
import InfoPage from './InfoPage';
import Loading from "../../components/Loading";

const Home = () => {
    const [info, setInfo] = useState({});

    useEffect(() => {
        API.get(`/info`)
            .then(res => {
                console.log(res.data);
                setInfo(res.data);
            })
            .catch(err => {
                console.log(err);
            })
    }, [])


    return (
        <div>
            <InfoPage info={info} />
        </div>
    );
}

export default Home;