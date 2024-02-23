import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton, Button } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import { useLocation } from 'react-router-dom';
import style from '../ApplicationDetails/ApplicationDetails.module.scss';
const ApplicationDetails = () => {
  //const [data, setData] = useState([]);

  const data = [
    {
        "applicationID": 1,
        "mobileNo": 1111111111,
        "name": "John Doe",
        "dob": "1999-01-01",
        "gender": "Male",
        "residentialPincode": "123456",
        "residentialAddress": "123 Main Street, City",
        "pan": "ABCDE1234F",
        "annualTurnover": "500000.0",
        "yearsInCurrentBusiness": "5",
        "businessPincode": "654321",
        "businessAddress": "456 Business Avenue, City",
        "businessRegisteredAs": "Sole Proprietorship",
        "productCategory": "Retail",
        "natureOfBusiness": "Small Retail Shop",
        "businessRunBy": "Owner",
        "requestedLoanAmount": 10000.0,
        "loanDurationInMonths": 12,
        "panCardUrl": "https://application-details.s3.amazonaws.com/4feeb6c9-cb8c-4ce8-a17c-e3294649e539_Suryansh_Jaiswal_Resume.pdf/2024-02-19T22:14:24.843620500",
        "bankStatementUrlOne": null,
        "bankInfoOne": null,
        "bankStatementOneDocFormat": null,
        "bankStatementUrlTwo": null,
        "bankInfoTwo": null,
        "bankStatementTwoDocFormat": null,
        "bankStatementUrlThree": null,
        "bankInfoThree": null,
        "bankStatementThreeDocFormat": null,
        "bankStatementUrlFour": null,
        "bankInfoFour": null,
        "bankStatementFourDocFormat": null,
        "bankStatementUrlFive": null,
        "bankInfoFive": null,
        "bankStatementFiveDocFormat": null,
        "businessRegistrationProofUrl": null,
        "businessAddressProofUrl": null,
        "idProofOfGuarantorUrl": null,
        "createdAt": "2024-02-19T16:45:15.143+00:00"
    },
    {
      "applicationID": 1,
      "mobileNo": 1111111111,
      "name": "John Doe",
      "dob": "1999-01-01",
      "gender": "Male",
      "residentialPincode": "123456",
      "residentialAddress": "123 Main Street, City",
      "pan": "ABCDE1234F",
      "annualTurnover": "500000.0",
      "yearsInCurrentBusiness": "5",
      "businessPincode": "654321",
      "businessAddress": "456 Business Avenue, City",
      "businessRegisteredAs": "Sole Proprietorship",
      "productCategory": "Retail",
      "natureOfBusiness": "Small Retail Shop",
      "businessRunBy": "Owner",
      "requestedLoanAmount": 10000.0,
      "loanDurationInMonths": 12,
      "panCardUrl": "https://application-details.s3.amazonaws.com/4feeb6c9-cb8c-4ce8-a17c-e3294649e539_Suryansh_Jaiswal_Resume.pdf/2024-02-19T22:14:24.843620500",
      "bankStatementUrlOne": null,
      "bankInfoOne": null,
      "bankStatementOneDocFormat": null,
      "bankStatementUrlTwo": null,
      "bankInfoTwo": null,
      "bankStatementTwoDocFormat": null,
      "bankStatementUrlThree": null,
      "bankInfoThree": null,
      "bankStatementThreeDocFormat": null,
      "bankStatementUrlFour": null,
      "bankInfoFour": null,
      "bankStatementFourDocFormat": null,
      "bankStatementUrlFive": null,
      "bankInfoFive": null,
      "bankStatementFiveDocFormat": null,
      "businessRegistrationProofUrl": null,
      "businessAddressProofUrl": null,
      "idProofOfGuarantorUrl": null,
      "createdAt": "2024-02-19T16:45:15.143+00:00"
  }
  ];


  const { state } = useLocation();

  const handleDownload = (url) => {
    // Create a temporary anchor element

  };

  const userData={
    "mobileNumber": 1234567890,
    "name": "John Doe",
    "email": "john.doe@example.com",
    "pan": "ABCDE1234F",
    "dob": "1990-01-01",
    "gender": "Male",
    "residentialPincode": 123456,
    "residentialAddress": "123 Main St, Cityville",
    "annualTurnover": 500000,
    "yearsInCurrentBusiness": 5,
    "businessPincode": 789012,
    "businessAddress": "456 Business St, Townsville",
    "businessRegisteredAs": "Private Limited",
    "productCategory": "Electronics",
    "natureOfBusiness": "Retail",
    "businessRunBy": "Owner",
    "requestedLoanAmount": 10000,
    "loanDurationInMonths": 12
}
  //state.row;

  console.log(" zasdfg",userData);



    return (
      <div className={style.main}>
      <div className={style.userAdmin}>
        <div>{userData.name}</div>
        <div className={style.detailBox}>
          <div>PAN: </div>
          <div>{userData.pan}</div>
        </div>
        <div className={style.detailBox}>
          <div>Email: </div>
          <div>{userData.email}</div>
        </div>
        <div className={style.detailBox}>
          <div>DOB: </div>
          <div>{userData.dob}</div>
        </div>
        <div className={style.detailBox}>
          <div>Gender: </div>
          <div>{userData.gender}</div>
        </div>
        <div className={style.detailBox1}>
          <div>Residential Address: </div>
          <div>{userData.residentialAddress}</div>
        </div>
        <div className={style.detailBox}>
          <div>Annual Turnover: </div>
          <div>{userData.annualTurnover}</div>
        </div>
        <div className={style.detailBox}>
          <div>Years in Business: </div>
          <div>{userData.yearsInCurrentBusiness}</div>
        </div>
        <div className={style.detailBox1}>
          <div>Business Address: </div>
          <div>{userData.businessAddress}</div>
        </div>
        <div className={style.detailBox1}>
          <div>Registered As: </div>
          <div>{userData.businessRegisteredAs}</div>
        </div>
        <div className={style.detailBox1}>
          <div>Product Category: </div>
          <div>{userData.productCategory}</div>
        </div>
        <div className={style.detailBox}>
          <div>Business Type: </div>
          <div>{userData.natureOfBusiness1}</div>
        </div>
        <div className={style.detailBox}>
          <div>Run By: </div>
          <div>{userData.businessRunBy}</div>
        </div>
        <div className={style.detailBox1}>
          <div>Requested Loan: </div>
          <div>Rs.{userData.requestedLoanAmount}</div>
        </div>
        <div className={style.detailBox1}>
          <div>Loan Duration: </div>
          <div>{userData.loanDurationInMonths}(Months)</div>
        </div>
      </div>
<div className={style.box2}>

{data.map(x=>(
  <div className={style.BoxTop}>
  <div className={style.detailBox2}>
          <div style={{fontSize:"20px"}}>ApplicationID : {x.applicationID}</div>
  </div>
  <div className={style.row1}>  
  <div className={style.detailBox2}>
          <div>applicationID : </div>
          <div className={style.detailBox1val}>{x.applicationID}</div>
  </div>
  <div className={style.detailBox2}>
          <div>Requested Loan Amount: </div>
          <div className={style.detailBox1val}>{x.requestedLoanAmount}</div>
  </div>
  <div className={style.detailBox2}>
          <div>Lona Duration: </div>
          <div className={style.detailBox1val}>{x.loanDurationInMonths}(Months)</div>
  </div>

  </div>

<div>

</div>

<div className={style.row1}>  
  <div className={style.detailBox2}>
          <div>product Category: </div>
          <div className={style.detailBox1val}>{x.productCategory}</div>
  </div>
  <div className={style.detailBox2}>
          <div>nature Of Business : </div>
          <div className={style.detailBox1val}>{x.natureOfBusiness}</div>
  </div>
  <div className={style.detailBox2}>
          <div>Business Run By: </div>
          <div className={style.detailBox1val}>{x.businessRunBy}</div>
  </div>
  </div>


  <div className={style.row1}>
  <div className={style.detailBox2}>
          <div>business Address: </div>
          <div className={style.detailBox1val}>{x.businessAddress}</div>
  </div> 
  <div className={style.detailBox2}>
          <div>Business Pincode: </div>
          <div className={style.detailBox1val}>{x.businessPincode}</div>
  </div>
  <div className={style.detailBox2}>
          <div>Year in Business: </div>
          <div className={style.detailBox1val}>{x.yearsInCurrentBusiness}</div>
  </div>

  </div>
  <div className={style.row1}>
  <div className={style.detailBox2}>
          <div>annual Turnover: </div>
          <div className={style.detailBox1val}>{x.annualTurnover}</div>
  </div>
  </div>

<div>
<div style={{fontSize:"17px"}}>Bank Statements</div>
  <div className={style.row1}>
  <Button variant="contained" onClick={() => handleDownload(x.bankStatementUrlOne)}>
              Download First Bank Statement
  </Button>
  <Button variant="contained" onClick={() => handleDownload(x.bankStatementUrlTwo)}>
              Download Second Bank Statement
  </Button>
  <Button variant="contained" onClick={() => handleDownload(x.bankStatementUrlThree)}>
              Download third Bank Statement
  </Button>

  </div>
  <div className={style.row1}>
  <Button variant="contained" onClick={() => handleDownload(x.bankStatementUrlFour)}>
              Download Fourth Bank Statement
  </Button>
  <Button variant="contained" onClick={() => handleDownload(x.bankStatementUrlFive)}>
              Download Fifth Bank Statement
  </Button>
  </div>
</div>

<div style={{fontSize:"17px"}}>Personal Documents</div>
  <div className={style.row1}>
  <Button variant="contained" onClick={() => handleDownload(x.panCardUrl)}>
              Download PAN Card
  </Button>
  <Button variant="contained" onClick={() => handleDownload(x.businessRegistrationProofUrl)}>
              BusinessReg Proof
  </Button>
  <Button variant="contained" onClick={() => handleDownload(x.businessAddressProofUrl)}>
              Business Address Proof
  </Button>
  <Button variant="contained" onClick={() => handleDownload(x.idProofOfGuarantorUrl)}>
             guarantor ID
  </Button>
  </div>


  </div>
))}



            {/* <div>Application ID: {item.applicationID}</div>
            <div>Mobile No: {item.mobileNo}</div>
            <div>Name: {item.name}</div>
            <div>Date of Birth: {item.dob}</div>
            <div>Gender: {item.gender}</div>
            <div>Residential Pincode: {item.residentialPincode}</div>
            <div>Residential Address: {item.residentialAddress}</div>
            <div>PAN: {item.pan}</div>
            <div>Annual Turnover: {item.annualTurnover}</div>
            <div>Years in Current Business: {item.yearsInCurrentBusiness}</div>
            <div>Business Pincode: {item.businessPincode}</div>
            <div>Business Address: {item.businessAddress}</div>
            <div>Business Registered As: {item.businessRegisteredAs}</div>
            <div>Product Category: {item.productCategory}</div>
            <div>Nature of Business: {item.natureOfBusiness}</div>
            <div>Business Run By: {item.businessRunBy}</div>
            <div>Requested Loan Amount: {item.requestedLoanAmount}</div>
            <div>Loan Duration in Months: {item.loanDurationInMonths}</div>
            <div>PAN Card URL: {item.panCardUrl}</div>
          
            <div>Created At: {item.createdAt}</div> */}
          



</div>
      
    </div>
    );
  };

export default ApplicationDetails;
