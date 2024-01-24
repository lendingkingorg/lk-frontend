// SimpleApplicationProcess.js

import React from 'react';
import classes from '../SimpleApplicationProcess/SimpleApplication.module.scss';
import BgImg from '../SimpleApplicationProcess/BgImg.png';
import Clock from '../../icons/Clock/Clock.js';

const SimpleApplicationProcess = () => {
    return (
        <div className={classes.simpleApplicationProcess}>
            <div className={classes.bgImg}></div>
            {/* <div className={classes.bgImgContainer}><img src={BgImg} alt="" className={classes.bgImg}/></div> */}
          <div className={classes.headingAndCards}>
            <div className={classes.center}>3-Step Application Process</div>
            <div className={classes.stepsContainer}>
                <div className={classes.step}>
                    <div className={classes.stepNumber}><div className={classes.numbers}>1</div></div>
                    <h3>Check Eligibility</h3>
                    <button className={classes.timeButton}><Clock/>2 mins</button>
                    <p>Quickly assess your eligibility for a business loan with minimal details</p>
                </div>
                <div className={classes.step}>
                    <div className={classes.stepNumber}><div className={classes.numbers}>2</div></div>
                    <h3>Complete KYC</h3>
                    <button className={classes.timeButton}><Clock/>2 mins</button>
                    <p>Effortlessly finish your KYC by uploading necessary documents</p>
                </div>
                <div className={classes.step}>
                    <div className={classes.stepNumber}><div className={classes.numbers}>3</div></div>
                    <h3>Loan Disbursement</h3>
                    <button className={classes.timeButton}><Clock/>24 hrs</button>
                    <p>Receive a fair loan offer after our prompt evaluation process</p>
                </div>
            </div>
          </div>
        </div>
    );
};

export default SimpleApplicationProcess;
