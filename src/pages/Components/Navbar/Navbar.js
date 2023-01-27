import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { IoPaperPlaneSharp } from "react-icons/io5";
import npbsty from './Navbar.module.css'
const Navbar = () => {
    return (
        <div>
            <div className={npbsty.navbarpart}>
                <div className={npbsty.navIcone}>
                    <img src='https://cdn.logojoy.com/wp-content/uploads/2018/05/01104823/1454.png' alt='Not Found '/>
                </div>

                <div className={npbsty.navigation}>
                    <Link>Home</Link>
                    <Link>About Us</Link>
                    <Link>Tour</Link>
                    <Link>Blog</Link>
                </div>

                <div className={npbsty.right_navigation}>
                    <Button variant="outline-danger">Book Now <IoPaperPlaneSharp></IoPaperPlaneSharp></Button>{' '}
                </div>
            </div>
        </div>
    );
};

export default Navbar;