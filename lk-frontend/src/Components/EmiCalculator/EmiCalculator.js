// EmiCalculator.js

import React, { useState } from 'react';
import './EmiCalculator.css'; // Import the stylesheet

const EmiCalculator = () => {
    const [loanAmount, setLoanAmount] = useState('');
    const [tenureMonths, setTenureMonths] = useState('');
    const [interestRate, setInterestRate] = useState('');
    const [emi, setEmi] = useState(null);

    const calculateEmi = () => {
        const monthlyInterestRate = interestRate / 100 / 12;
        const emiValue =
            (loanAmount * monthlyInterestRate) /
            (1 - Math.pow(1 + monthlyInterestRate, -tenureMonths));
        setEmi(emiValue.toFixed(2));
    };

    return (
        <div className="container">
            <header>
                <h1>Business Loan EMI Calculator</h1>
            </header>

            <div className="input-group">
                <div className="input-field">
                    <label>Loan amount (₹):</label>
                    <input
                        type="number"
                        value={loanAmount}
                        onChange={(e) => setLoanAmount(e.target.value)}
                    />
                </div>

                <div className="input-field">
                    <label>Tenure (Months):</label>
                    <input
                        type="number"
                        value={tenureMonths}
                        onChange={(e) => setTenureMonths(e.target.value)}
                    />
                </div>

                <div className="input-field">
                    <label>Reducing rate of interest (% p.a.):</label>
                    <input
                        type="number"
                        value={interestRate}
                        onChange={(e) => setInterestRate(e.target.value)}
                    />
                </div>
            </div>

            <button onClick={calculateEmi}>Calculate EMI</button>

            {emi !== null && (
                <div className="result">
                    <h3>EMI will be ₹ {emi}</h3>
                    {/* <button>Apply now</button> */}
                </div>
            )}
        </div>
    );
};

export default EmiCalculator;
