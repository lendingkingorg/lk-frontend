import React, { useState } from 'react';
import Slider from '@mui/material/Slider';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import classes from "../EmiCalculator/EMICalculator.module.scss"


const EMICalculator = () => {
  const [loanAmount, setLoanAmount] = useState(50000);
  const [interestRate, setInterestRate] = useState(5);
  const [tenure, setTenure] = useState(12);

  const calculateEMI = () => {
    const principal = parseFloat(loanAmount) * 100; // Convert to paise
    const rateOfInterest = parseFloat(interestRate) / 100 / 12;
    const numberOfPayments = parseFloat(tenure);

    const emi =
      (principal * rateOfInterest * Math.pow(1 + rateOfInterest, numberOfPayments)) /
      (Math.pow(1 + rateOfInterest, numberOfPayments) - 1);

    return (emi / 100).toFixed(2); // Convert back to rupees
  };

  return (

<div className={classes.EMIBox}>
    <div  className={classes.calBox}>

<div className={classes.head}>
Plan Your Finances Easily
    
</div>
<div className={classes.subHead}>

Use Our Simple Loan Calculator to See How Much You Can Afford.
</div>

      <Grid container spacing={2} alignItems="center">
        <Grid item xs={12}>
          <Typography id="loan-amount-slider" gutterBottom className={classes.loanTxt}>
            Loan Amount:
            <div className={classes.loanAmt}>
             ₹{loanAmount}
             </div>
          </Typography>
          <Slider
            value={loanAmount}
            min={5000}
            max={100000}
            step={5000}
            onChange={(e, value) => setLoanAmount(value)}
            aria-labelledby="loan-amount-slider"
          />
        </Grid>
        <Grid item xs={12}>
          <Typography id="interest-rate-slider" gutterBottom className={classes.loanTxt}>
            Interest Rate:  <div className={classes.loanAmt}>{interestRate}%</div>
          </Typography>
          <Slider
            value={interestRate}
            min={1}
            max={20}
            step={0.5}
            onChange={(e, value) => setInterestRate(value)}
            aria-labelledby="interest-rate-slider"
          />
        </Grid>
        <Grid item xs={12}>
          <Typography id="tenure-slider" gutterBottom className={classes.loanTxt}> 
            Tenure (months): <div className={classes.loanAmt}>{tenure}</div>
          </Typography>
          <Slider
            value={tenure}
            min={6}
            max={60}
            step={1}
            onChange={(e, value) => setTenure(value)}
            aria-labelledby="tenure-slider"
          />
        </Grid>
       
      </Grid>
    </div>

    <div className={classes.resBox}>
    <div className={classes.mothlyStyle}>
        Monthly Amount
        <div className={classes.resStyle}>
        ₹{calculateEMI()}
        </div>

    </div>

    <div className={classes.resbox}>
    <div className={classes.Interest}>
    Total Interest Rate
    <div className={classes.val}>
    {interestRate}%
    </div>
    </div>

    <div style={{border:"0.5px  solid #575B6D"}}></div>

    <div className={classes.Interest}>
    Total Amount
    <div className={classes.val}>
    ₹{(calculateEMI()*tenure).toFixed(2)}
    </div>
    </div>  
    
    </div>
    </div>
    </div>
  );
};

export default EMICalculator;