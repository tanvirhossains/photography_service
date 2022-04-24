import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css'
const Service = ({ service }) => {
    const { name, price, discription , img, id} = service
const navigate = useNavigate('')

    const handleBooking = (id)=>{
        navigate(`/serviceDetail/${id}`)
    }
    return (
        
            <div className="card card-container" >
                <img className="card-img-top" src={img} alt="Card image cap" />
                    <div className="card-body">
                        <h3 className="card-title">Name: {name}</h3>
                        <h5>Price: ${price}</h5>
                        <p className="card-text">Discription:{discription}</p>
                        <button onClick={() =>handleBooking(id)} className="btn btn-primary">Booking</button>
                    </div>
           </div>
        
    );
};

export default Service;