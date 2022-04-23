import React from 'react';
import './Blogs.css'

const Blogs = () => {
    return (
        <div>
            <h1 className='text-center'>Three questions !!</h1>
            <h1 className='p-5'> Diffrence between Authorization vs Authentication</h1>
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
    );
};

export default Blogs;