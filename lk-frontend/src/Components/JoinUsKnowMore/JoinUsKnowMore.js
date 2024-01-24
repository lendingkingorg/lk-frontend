import React from "react";
import KnowMore from "../../utilities/KnowMore/KnowMore";
import JoinUs from "../../utilities/JoinUs/JoinUs.js";
import classes from "../JoinUsKnowMore/JoinUsKnowMore.module.scss";

const JoinUsKnowMore = () => {
    return (
        <div>
            <div className={classes.bigBox}>
                <div className={classes.firstbox}>
                    <KnowMore className={classes.knowRel}/>
                <div className={classes.knowMoreBtn}><div className={classes.btnText}>KNOW MORE</div></div>
                </div>

                <div className={classes.secondbox}>
                    <JoinUs/>
                <div className={classes.joinUsBtn}><div className={classes.btnText}>JOIN US</div></div>
                </div>

            </div>
        </div>
    )
}

export default JoinUsKnowMore;