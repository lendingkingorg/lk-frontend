import React, { useEffect, useState } from 'react';
import './MainEmiComponent.scss';
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

const formatCurrency = (value) => {
    return new Intl.NumberFormat('en-IN', {
        style: 'currency',
        currency: 'INR',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
    }).format(value);
};

const formatLoanDuration = (months) => {
    return `${months}M`;
};

const formatInterestRate = (rate) => {
    return `${rate}%`;
};

const calculateEmi = (amount, months, interestRate) => {
    const monthlyInterestRate = interestRate / 100 / 12;
    const emi =
        (amount * monthlyInterestRate) /
        (1 - Math.pow(1 + monthlyInterestRate, -months));
    return {
        interestRate,
        monthlyPayment: emi.toFixed(2),
        numPayments: months,
    };
};

const MainBox = () => {
    const [state, setState] = useState({
        amount: 1800000,
        months: 24,
        interestRate: 24,
        monthlyPayment: 0,
        numPayments: 0,
    });

    useEffect(() => {
        localStorage.removeItem('history');
    }, []);

    useEffect(() => {
        const emiDetails = calculateEmi(
            state.amount,
            state.months,
            state.interestRate
        );
        setState((prevState) => ({ ...prevState, ...emiDetails }));
        addToLocalStorageArray('history', { ...state, ...emiDetails });
    }, [state.amount, state.months, state.interestRate]);

    const addToLocalStorageArray = (name, value) => {
        let existing = localStorage.getItem(name);
        existing = existing ? JSON.parse(existing) : [];
        existing.push(value);
        localStorage.setItem(name, JSON.stringify(existing));
    };

    const handleAmountChange = (event) => {
        setState((prevState) => ({ ...prevState, amount: Number(event.target.value) }));
    };

    const handleMonthsChange = (event) => {
        setState((prevState) => ({ ...prevState, months: Number(event.target.value) }));
    };

    const handleInterestRateChange = (event) => {
        setState((prevState) => ({ ...prevState, interestRate: Number(event.target.value) }));
    };

    return (
        <>
            <h2 className="center">Business Loan EMI Calculator</h2>
            <main className="main">
                <div className="input-form">
                    <form>
                        <div className="form-group">
                            <input
                                type="number"
                                max={3000000}
                                min={300000}
                                step={100000}
                                value={state.amount}
                                onChange={handleAmountChange}
                            />
                           <Box sx={{ width: 300 }}>
                                <Slider
                                    value={state.months}
                                    onChange={handleMonthsChange}
                                    aria-label="Loan Duration"
                                    valueLabelDisplay="auto"
                                    min={12}
                                    max={60}
                                    step={6}
                                />
                            </Box> 
                            <label>Loan Amount</label>
                        </div>
                        <div className="form-group">
                            <input
                                type="number"
                                max={60}
                                min={12}
                                step={6}
                                value={state.months}
                                onChange={handleMonthsChange}
                            />
                           <Box sx={{ width: 300 }}>
                                <Slider
                                    value={state.months}
                                    onChange={handleMonthsChange}
                                    aria-label="Loan Duration"
                                    valueLabelDisplay="auto"
                                    min={12}
                                    max={60}
                                    step={6}
                                />
                            </Box>

                            <label>Loan Duration</label>
                        </div>
                        <div className="form-group">
                            <input
                                type="number"
                                max={36}
                                min={12}
                                step={0.5}
                                value={state.interestRate}
                                onChange={handleInterestRateChange}
                            />
                            <Box sx={{ width: 300 }}>
                                <Slider
                                    value={state.months}
                                    onChange={handleMonthsChange}
                                    aria-label="Loan Duration"
                                    valueLabelDisplay="auto"
                                    min={12}
                                    max={60}
                                    step={6}
                                />
                            </Box>
                            <label>Interest Rate</label>
                        </div>
                    </form>
                    <div className="current-status">
                        <h4>Interest Details</h4>
                        <div className="row">
                            <div className="col-2"> Interest Rate </div>
                            <div className="col-2"> {formatInterestRate(state.interestRate)} </div>
                        </div>
                        <div className="row">
                            <div className="col-2"> Monthly Payment </div>
                            <div className="col-2"> {formatCurrency(state.monthlyPayment)} </div>
                        </div>
                        <div className="row">
                            <div className="col-2"> Number of Payments </div>
                            <div className="col-2"> {state.numPayments} </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
};

export default MainBox;
