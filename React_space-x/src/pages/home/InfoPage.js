import React from 'react'

const InfoPage = ({ info }) => {
    return (
        <div>
            <h1>{info.name}</h1>
            <h2>Founder and CEO: {info.founder}</h2>
            <h3>Founded: {info.founded}</h3>
            <h3>Employee: {info.employees}</h3>
            <p style={{ padding: "1.5rem" }}>{info.summary}</p>
        </div>
    );
}

export default InfoPage;