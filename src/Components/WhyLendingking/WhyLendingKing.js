
import React from 'react';
import {useState} from 'react';
// import './WhyLendingKing.css';
import classes from '../WhyLendingking/WhyLendingKing.module.scss';
import ErrorRedButton from '../../icons/ErrorRedButton/ErrorRedButton';
import HowDoesItWorkButton from '../../icons/HowDoesItWorkButton';
import GreenDot from '../../icons/GreenDot/GreenDot.png';
import HowDoesItWorkPopup from '../../utilities/HowItWorksPopup/HowItWorksPopup';
import MobilePhones from '../WhyLendingking/MobilePhones.png';
// import Rocket from "../WhyLendingking/Rocket.png";

const WhyLendingKing = () => {

    return (
        <div className={classes.parentWhyLendingKing}>
            <div className={classes.topTextAndDot}><div className={classes.textTop}><div><ErrorRedButton/></div>Compare loans from multiple lending partners</div></div>

              <div className={classes.bigTextContainer}>
                <div className={classes.bigText}>Smart Choices, Smarter Vendors <div className={classes.secondPortion} styles={{color:'black'}}>Powering Your Success</div></div>
                </div>

                <div className={classes.buttonContainer}>
                    <HowDoesItWorkPopup/>
                    <div className={classes.startLoanButton}>Start Loan</div>
                </div>

                <div className={classes.bulletPoints}>

                 

                    <div><img src={GreenDot} alt="" className={classes.greenDot} />
                    <div className={classes.bulletPoint}>Multiple lenders</div></div>

                    <div><img src={GreenDot} alt="" className={classes.greenDot} />
                    <div className={classes.bulletPoint}>100% Digital Verification</div></div>

                    <div><img src={GreenDot} alt="" className={classes.greenDot} />
                    <div className={classes.bulletPoint}>Transparent processing</div></div>

                    
                    

                    <div><img src={GreenDot} alt="" className={classes.greenDot} />
                    <div className={classes.bulletPoint}>Superfast processing</div></div>

                    <div><img src={GreenDot} alt="" className={classes.greenDot} />
                    <div className={classes.bulletPoint}>No Collaterals Required</div></div>

                </div>
                

                <div className={classes.mobiles}>
              <img src={MobilePhones}
                alt=""
                className={classes.mobileImages} />
              </div>


        </div>
    );
};

export default WhyLendingKing;
