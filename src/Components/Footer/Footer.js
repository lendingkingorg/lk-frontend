// LendingKing.js

import React from 'react';
import './Footer.css';
import certificate1 from './certificate.png'
import certificate2 from './certificate2.png'

const Footer = () => {
    return (
        <div className="LendingKing-section">
            <h2>Lendingking</h2>
            <p>
                Lendingking is a platform that connects businesses with lending options offered by RBI-licensed NBFC partners providing working capital loans and business loans to SMEs across India. We give you access to capital in a completely online quick process with minimum documents and no collateral needed.. The loans offered on the platform are subject to the terms and conditions and loan approval process of the NBFC partners.
            </p>
            <p>
                We aims to make working capital finance available at the fingertips of entrepreneurs.
            </p>
            <p>&copy; 2023 Lendingking powered by:-  Sumami Technologies Private Limited. All rights reserved.</p>
            <p>Made with ❤️ in Bangalore, Karnataka, +91 7026113839, support@lendingking.in</p>
            <img className="logo" src={certificate1} alt="Your Logo Alt Text" />
            <img className="logo" src={certificate2} alt="Your Logo Alt Text" />

        </div>
    );
};

export default Footer;
