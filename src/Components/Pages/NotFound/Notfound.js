import React from 'react';
import notFound from '../../Images/notFound.png'
import './NotFound.css'
const Notfound = () => {
    return (
        <div className='notfound-container'>
            <h1 className='text-center'>Opps !!!  You came to the wrong page.</h1>
          <img src={notFound} alt="" />
        </div>
    );
};

export default Notfound;