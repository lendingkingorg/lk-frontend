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

                {/* Navigation links */}
                <ul className={`nav-links ${isMobileMenuOpen ? 'open' : ''}`}>
                    <li>
                        <NavLink to="/" exact activeClassName="active" >
                            Home
                        </NavLink>
                    </li>
                    {/* <li>
                        <NavLink to="/about" activeClassName="active">
                            About
                        </NavLink>
                    </li> */}
                    {/* <li>
                        <NavLink to="/contact" activeClassName="active">
                            Contact Us
                        </NavLink>
                    </li> */}
                    <li>
                        <NavLink to="https://docs.google.com/forms/d/e/1FAIpQLSdoImOgYObnN_Mn0iJ-71eVvp37hUgCha581NEqwHQVwBJ_Yw/viewform?usp=send_form" activeClassName="active">
                            Join Us
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
