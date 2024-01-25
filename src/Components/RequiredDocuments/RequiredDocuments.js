// RequiredDocuments.js

import React from 'react';
// import './RequiredDocuments.css';
import classes from '../RequiredDocuments/RequiredDocuments.module.scss';
import GreenBulletPoint from '../../icons/GreenBulletPoint/GreenBulletPoint';

const RequiredDocuments = () => {
    return (
        <div className={classes.main}>
       <div className={classes.container}>
        <div className={classes.qualification}>
            <div className={classes.firstHeading}>Qualification Criteria</div>
            <div className={classes.firstContent}>
                <div className={classes.point}><GreenBulletPoint/><div className={classes.sentence}>Age: 23-60 years</div></div>
                <div className={classes.point}><GreenBulletPoint/><div className={classes.sentence}>Business Type: All constitution</div></div>
                <div className={classes.point}><GreenBulletPoint/><div className={classes.sentence}>Years in business: 2+</div></div>
                <div className={classes.point}><GreenBulletPoint/><div className={classes.sentence}>Industry: All eligible industries</div></div>
                {/* <div>(see list of restricted industries)</div> */}

            </div>
        </div>

        <div className={classes.docsRequired}>
        <div className={classes.secondHeading}>Documents Required</div>
        <div className={classes.secondContent}>
            <div className={classes.point}><GreenBulletPoint/><div className={classes.sentence}>12 months’ bank statement</div></div>
            <div className={classes.point}><GreenBulletPoint/><div className={classes.sentence}>Aadhaar and PAN card</div></div>
            <div className={classes.point}><GreenBulletPoint/><div className={classes.sentence}>At least 1 business proof</div></div>
            <div className={classes.point}><GreenBulletPoint/><div className={classes.sentence}>Ownership Proof - Business / Residence</div></div>
            {/* <div>(at least 1 from list)</div> */}
        </div>
        </div>
       </div>
       </div>
    );
};

export default RequiredDocuments;


{/* <div className={classes.requiredDocuments}>
<h2>Documents we require</h2>
<ul className={classes.documentList}>
    <li>PAN Card</li>
    <li>Aadhar Card</li>
    <li>Bank Statement</li>
    <li>Registration Proof</li>
    <li>Partnership Deed*</li>
    <li>Company PAN*</li>
</ul>
<p>* Only for Partnership companies, Pvt. Ltd or LLC companies</p>
</div> */}