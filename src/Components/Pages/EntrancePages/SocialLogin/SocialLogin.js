import React from 'react';
import google from '../../../Images/social/google.png'
import facebook from '../../../Images/social/facebook.png'
import github from '../../../Images/social/github.png'
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';

import { useNavigate } from 'react-router-dom';
import auth from '../../../../Firebase.init';

const SocialLogin = () => {
    const [signInWithGoogle, googleUser, loading, googleError] = useSignInWithGoogle(auth);
    const [signInWithGithub, gitUser, loading1, gitError] = useSignInWithGithub(auth);

    const navigate = useNavigate(auth)
    let errorValue;
    if (googleError || gitError) {
        errorValue = (
            <div>
                <p>Error: {googleError?.message} {gitError?.message}</p>
            </div>
        );
    }
    if (googleUser || gitUser) {
        navigate('/home')
    }

    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{ height: '1px' }} className='bg-primary w-50 '></div>
                <p className='m-2 text-black'>or</p>
                <div style={{ height: '1px' }} className='bg-primary w-50'></div>
            </div>
            <p>{errorValue}</p>
            <div>
                <button onClick={() => signInWithGoogle()} className='btn btn-primary w-50 d-block mx-auto  my-3'>
                    <img src={google} alt="" />
                    <span className='p-3'>Google sigh in</span>  </button>
            </div>
            <div>
                <button className='btn btn-danger w-50 d-block mx-auto  my-3'>
                    <img src={facebook} alt="" />
                    <span className='p-3'>  Facebook sigh in</span> </button>
            </div>
            <div>
                <button onClick={() => signInWithGithub()} className='btn btn-primary w-50 d-block mx-auto  my-3'>
                    <img src={github} alt="" />
                    <span className='p-3'>github sigh in</span>   </button>
            </div>
        </div>

    );
};

export default SocialLogin;