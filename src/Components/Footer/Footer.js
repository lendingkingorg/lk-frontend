// LendingKing.js

import React from 'react';
import './Footer.css';
import certificate1 from './certificate.png'
import certificate2 from './certificate2.png'
import classes from "../Footer/Footer.module.scss";
import GooglePlay from "../Footer/GooglePlay.png";
import AppStore from "../Footer/AppStore.png";
import Flag from "../Footer/Flag.png";

const Footer = () => {
    return (
        <div className={classes.container}>

            <div className={classes.main}>

            <div className={classes.containerOne}>
                <div className={classes.content}>LendingKing is a B2B platform that provides <div>trusted and affordable solutions to accelerate</div> <div>growth for MSMEs.</div></div>
                <div className={classes.image}>
                    <div className={classes.imageOne}><img src={GooglePlay} alt=""></img></div>
                    <div className={classes.imageTwo}><img src={AppStore} alt=""></img></div>
                </div>
            </div>

            <div className={classes.containerTwo}>
                <div className={classes.heading}>Company</div>
                <div className={classes.content}>
                    <div>About LendingKing</div>
                    <div>Careers</div>
                    <div>FAQ for Buyers</div>
                    <div>FAQ for Sellers</div>
                    <div>Register for Webinar</div>
                </div>
            </div>

            <div className={classes.containerThree}>
            <div className={classes.heading}>Legal</div>
            <div className={classes.content}>
                    <div>Support Services</div>
                    <div>Software Used</div>
                    <div>Report Copyright Infringement</div>
                    <div>Privacy & Terms</div>
            </div>
            </div>

            <div className={classes.containerFour}>
            <div className={classes.heading}>Contact Us</div>
            <div className={classes.content}>
                    <div>+91-902-211-2299</div>
                    <div>support@LendingKing</div>
                    <div>+91-902-233-8000</div>
            
            </div>
        </div>
            </div>

            <div className={classes.secondFooter}>
                <div className={classes.name}>© 2023, Sumami Technologies Pvt. Limited. All Rights Reserved.</div>
                <div className={classes.tag}>
                    <div className={classes.flag}><img src={Flag} alt=""></img></div>
                    <div className={classes.flagText}>Built with Love
Made in India</div>
                </div>

            </div>
            

        </div>
    );
};

export default Footer;


{/* <div className="LendingKing-section">
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

</div> */}