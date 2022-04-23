import React from 'react';
import './Blogs.css'

const Blogs = () => {
    return (
        <div>
            <h1 className='text-center text-primary'>Three questions !!</h1>
            <div>
                <h1 className='container'> Diffrence between Authorization vs Authentication</h1>
                <table>
                    <tr>
                        <th className='table-header'>Authentication </th>
                        <th className='table-header'>Authorization</th>
                    </tr>
                    <tr>
                        <td>Authentication works through passwords, one-time pins, biometric information, and other information provided or entered by the user.</td>
                        <td>Authorization works through settings that are implemented and maintained by the organization.</td>

                    </tr>
                    <tr>
                        <td>Authentication is the first step of a good identity and access management process.</td>
                        <td>Authorization always takes place after authentication.</td>

                    </tr>
                    <tr>
                        <td>Authentication is visible to and partially changeable by the user.</td>
                        <td>	Authorization isn’t visible to or changeable by the user.</td>

                    </tr>
                    <tr>
                        <td>Example: By verifying their identity, employees can gain access to an HR application that includes their personal pay information, vacation time, and 401K data</td>
                        <td>Example: Once their level of access is authorized, employees and HR managers can access different levels of data based on the permissions set by the organization.</td>
                    </tr>
                </table>
            </div>
            <div className='container'>
                <h1>Why are you using firebase? What other options do you have to implement authentication?</h1>
                <p>Firebase is an authentication system that make a developer more esier to implement the sucuriti system.</p>

                <h3>Alternative of Firebase</h3>
                <ul>
                    <li>MongoBd</li>
                    <li>Auth</li>
                    <li>okta</li>
                    <li>keycloack</li>
                </ul>
            </div>
            <div className='container'>
                <h1> What other services does firebase provide other than authentication</h1>
                <ul>
                    <li>Parse :- Open Source Backend Platform;
                        Back4app </li>
                    <li>Back4app: -Parse Hosting Platform;
                    </li>
                    <li>Kinvey - Mobile Backend as a Service (mBaaS) for the Enterprise;</li>
                    <li>Backendless :- Mobile Backend and API Services Platform;</li>
                    <li>Kuzzle :- Backend for web, hybrid, or native mobile apps and IoT projects;</li>
                    <li>Pubnub :- Real-time APIs and Global Messaging;</li>
                    <li>Kumulos :- App Performance Management;</li>
                    <li>Game Sparks:- Game Backend Platform;</li>
                    <li>Hoodie :- Generic backend with a client API for Offline First applications;</li>
                </ul>
            </div>

        </div >
    );
};

export default Blogs;