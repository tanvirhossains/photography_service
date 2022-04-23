import React from 'react';
import './Service.css'
const Service = ({ service }) => {
    const { name, price, discription , img} = service
    return (
        
            <div className="card card-container" >
                <img className="card-img-top" src={img} alt="Card image cap" />
                    <div className="card-body">
                        <h3 className="card-title">Name: {name}</h3>
                        <h5>Price: ${price}</h5>
                        <p className="card-text">Discription:{discription}</p>
                        <a href="/login" className="btn btn-primary">Booking</a>
                    </div>
           </div>
        
    );
};

export default Service;