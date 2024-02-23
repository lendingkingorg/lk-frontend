// Navbar.js

import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import logo from './logo.jpg'

const Navbar = () => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <nav>
            <div className="navbar-container">
                {/* <div className="logo-container">  */}
                <img className="logo" src={logo} alt="Your Logo Alt Text" />
                {/* </div> */}
                {/* Burger menu icon for small screens */}
                <div className="burger-menu" onClick={toggleMobileMenu}>
                    <div className={`bar ${isMobileMenuOpen ? 'open' : ''}`}></div>
                    <div className={`bar ${isMobileMenuOpen ? 'open' : ''}`}></div>
                    <div className={`bar ${isMobileMenuOpen ? 'open' : ''}`}></div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
