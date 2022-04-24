import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../../Firebase.init';
import CustomLink from '../CustomeLink/CustomLink';
import './Header.css'

const Header = () => {
      const [user] = useAuthState(auth)

    const handleSignOut = () => {
        signOut(auth)
    }
    return (
        <div className='d-flex header'>
            <CustomLink to='/'>Home</CustomLink>
            <CustomLink to='/services'>Services</CustomLink>
            <CustomLink to='/about'>About</CustomLink>
            <CustomLink to='/blogs'>Blogs</CustomLink>
            {user ? <a href='' onClick={handleSignOut}>SignOut</a>
                :
                 <CustomLink to='/login'>Login</CustomLink>

            }


        </div>
    );
};

export default Header;