import React from 'react';
import styl from "./Customarreviw.module.css"
import { HiChevronRight, HiChevronLeft, HiStar } from "react-icons/hi";
const Customarreviw = () => {
    return (
        <div>
            <div className={styl.Customer_rivew_part}>
                <div className={styl.left_Of_Customer_rivew_part}>
                    <div className={styl.left_img}>
                        <img src="https://www.imgacademy.com/sites/default/files/styles/scale_1700w/public/2018-09/herobanner-events.jpg?itok=hI-hYGG6" alt=''></img>
                    </div>
                </div>
                <div className={styl.right_Of_Customer_rivew_part}>
                    <div className={styl.dot}></div>
                    <h1>A customer Said About Us :</h1>
                    <div className={styl.coment_box}>
                        <p>Get Latest Info. Fast Response. Awesome Info. Latest Today. Find it Here. Relevant Results. Get More Results. Search Now. Updated Info. More Info.</p>

                        <div className={styl.customrt_reting}>
                            <div className={styl.reter_name}> 
                                <div className={styl.retingicon}>
                                    <HiStar /><HiStar /><HiStar /><HiStar /><HiStar />
                                </div>
                                <h3>Arman Islam</h3>
                                <p>Designer</p>
                            </div>


                            <div className={styl.iconbx}>
                                <HiChevronLeft></HiChevronLeft>
                                <HiChevronRight></HiChevronRight>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Customarreviw;