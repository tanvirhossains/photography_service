import React from 'react';
import wildMan from '../../../Images/photographer1.jpg'
import Services from '../Services/Services';
import './Home.css';
const Home = () => {
    return (
        <div>
            {/* <h1 className='home-container'> Hello I am a wild photogrepher </h1> */}
            <div className=' photographer-info'>
                <div> <img src={wildMan} alt="" /> </div>
                <div className='container'>
                    <h1>This is <span className='name'>  Tanvir Hossain Mozumder</span> </h1>
                    <p>Hello wellcome !! <br />
                        I'm a photographer and i'm taking photo from a long time and if you want to take photo , may be i will be a good one. <br />
                        I have several experience about taking photo in my entire life. <br />
                        if you want to take photo you can hire me !!</p>

                    <button >Hire me </button>
                </div>
            </div>
            <div>

            </div>
            <Services></Services>
            <div>

            </div>

        </div>
    );
};

export default Home;