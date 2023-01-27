import React from 'react';
import CartPart from './CartPsat';
import styl from './Destination.module.css'
import { HiChevronRight, HiChevronLeft } from "react-icons/hi";
const Destination = () => {
    return (
        <div>
            <div className={styl.Destination_header}>
                <div className={styl.Destination_header_text}>
                    <h1>Find Populer Destination</h1>
                    <div className={styl.iconbx}>
                    <HiChevronLeft></HiChevronLeft>
                    <HiChevronRight></HiChevronRight>
                    </div>
                </div>
                <div className={styl.Destination_header_icon}>
                    <CartPart></CartPart>
                    <CartPart></CartPart>
                    <CartPart></CartPart>
                </div>
            </div>

            <div>
                
            </div>
        </div>
    );
};

export default Destination;