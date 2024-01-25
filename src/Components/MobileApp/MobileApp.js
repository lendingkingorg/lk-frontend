import React from "react";
import classes from "../MobileApp/MobileApp.module.scss";
import Spiral from "../../utilities/SpiralDesign/SpiralDesign.js";
import GreenBulletPoint from "../../icons/GreenBulletPoint/GreenBulletPoint.js";
import Scanner from "../../utilities/Scanner/Scanner.png"
import MobileAppPhone from "../MobileApp/MobileAppPhone.png";

const MobileApp = () => {
    return (
        <div className={classes.container}>
            <div className={classes.main}>
            <div className={classes.heading}>Download 
 <div className={classes.halfHeading}>LendingKing Mobile App</div></div>
 <div className={classes.secondHeading}>Your Financial Journey Made Simple.</div>

 <div className={classes.pointsContainer}>
    <div className={classes.point}><div><GreenBulletPoint/></div>Track your credit score for free and  we help you to improve</div>
    <div className={classes.point}><div><GreenBulletPoint/></div>Various range of lenders on our platform with multiple options</div>
    <div className={classes.point}><div><GreenBulletPoint/></div>Experience swift responses and efficient fund disbursal</div>
 </div>

 <div className={classes.scanSentence}>Scan or click to Download App on your mobile</div>

     <div className={classes.scanner}>
        <img src={Scanner} alt="" className="scannerImg"></img>
     </div>
            </div>

     <div className={classes.mobile}>
        <img src={MobileAppPhone} alt="" className={classes.mobileImg}></img>
     </div>
        </div>
    );
};

export default MobileApp;
