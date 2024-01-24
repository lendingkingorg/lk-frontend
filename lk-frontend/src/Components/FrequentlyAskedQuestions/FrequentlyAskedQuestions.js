
import React from "react";
import Accordion from '../../utilities/Accordion/Accordion.js';
// import classes from '../FrequentlyAskedQuestions/FrequentlyAskedQuestions.module.scss';
import classes from '../FrequentlyAskedQuestions/FrequentlyAskedQuestions.module.scss';

const FrequencyAskedQuestions = () => {
    return (
        <div>
            <div className={classes.faqContainer}>
                <div className={classes.heading}>Frequently asked questions</div>
                <div className={classes.qna}><Accordion/></div>
            </div>
            
        </div>
    );
};

export default FrequencyAskedQuestions;