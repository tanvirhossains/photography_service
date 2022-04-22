import React from 'react';
import CustomLink from '../CustomeLink/CustomLink';
import './Header.css'

const Header = () => {
    return (
        <div className='d-flex header'>
            <CustomLink to='/'>Home</CustomLink>
        <CustomLink to='/services'>Services</CustomLink>
            <CustomLink to='/aboutme'>About Me</CustomLink>
            <CustomLink to='/blogs'>Blogs</CustomLink>
            <CustomLink to='/login'>Login</CustomLink>
            
        </div>
    );
};

export default Header;