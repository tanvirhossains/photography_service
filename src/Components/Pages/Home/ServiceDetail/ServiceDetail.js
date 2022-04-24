import React from 'react';
import { Link, useParams } from 'react-router-dom';

const ServiceDetail = () => {
    const param = useParams()
    return (
        <div>
            <h1>Service detail : {param.serviceId} </h1>
            <Link to='/checkout'> Checkout Checking</Link>
        </div>
    );
};

export default ServiceDetail;