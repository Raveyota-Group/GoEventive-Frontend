import React from 'react';
import stl from './Sendemail.module.css';
import { IoIosPaperPlane } from "react-icons/io";
const Sendemail = () => {
    return (
        <div className={stl.sendemail}>
            <div className={stl.sendemailpart}>
                <h1>Sing Up To Our Newsletter</h1>
                <p>Review latest Newa,Update and any other thing every week</p>
                <div className={stl.inputbox}>
                    <input type="text" placeholder='type your email'/>
                    <IoIosPaperPlane></IoIosPaperPlane>
                </div>
            </div>
        </div>
    );
};

export default Sendemail;