import React from "react";
import bar from "../CreditScore/CreditScore.png";
import classes from "../CreditScore/CreditScore.module.scss";
import meter from "../CreditScore/ClipPathGroup.png";
import emoji from "../CreditScore/emoji.png";
import Arrow from "../../utilities/ArrowButton/ArrowButton";

const CreditScore = () => {
    return (
        <div className={classes.container}>
            <div className={classes.bgImg}>
                <div className={classes.sentence}>
                <img src={meter} alt="" className={classes.meterImg}></img>
                <div className={classes.heading}>Check Credit Score for <div className={classes.free}>FREE!!!</div></div>
                <img src={emoji} alt="" className={classes.emoji}></img>
                </div>

                <div className={classes.arrow}>
                <Arrow/>
            </div>
            </div>

        </div>
    );
};

export default CreditScore;