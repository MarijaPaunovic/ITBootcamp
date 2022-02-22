import React from "react";
import { useParams } from "react-router-dom";

const LaunchDetails = () => {
    const params = useParams();
    console.log(params);
    const { id } = useParams();
    console.log(id);
    return <div>#{id} Launch Details</div>;
};

export default LaunchDetails;