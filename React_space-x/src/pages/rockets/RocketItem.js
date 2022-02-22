import React from 'react'

const RocketItem = ({ rocket }) => {

    return (
        <>
            <li>
                <h1>{rocket.country}</h1>
                <img src={rocket.flickr_images[0]} />
            </li>
        </>
    );
}

export default RocketItem;