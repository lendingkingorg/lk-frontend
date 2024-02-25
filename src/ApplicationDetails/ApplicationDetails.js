import React, { useEffect, useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton, Button } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import { useLocation } from 'react-router-dom';
import style from '../ApplicationDetails/ApplicationDetails.module.scss';
const ApplicationDetails = () => {

  const [userData, setUserData] = useState({});
  
  const [applicationData, setApplicationData] = useState(null);
  const { state } = useLocation();
  const { row } =state;
  const userId = row.mobileNumber;
  
  console.log("userId",state);

  const handleDownload = (url) => {
    // Create a temporary anchor element

  };


useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await fetch(`http://lendingking-test.eu-central-1.elasticbeanstalk.com/get-user-applications/${userId}`);
 
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
 
      setApplicationData(data);
    } catch (error) {
  
      console.error('Error fetching data:', error);
    }
  };

  fetchData();
  setUserData(row)

}, [userId]);

  console.log(" zasdfg",userData);

if(applicationData==null)return <></>;
if(userData==null)return <></>
    return (
      
      <>
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
{console.log("applicationData",applicationData)}
{applicationData?.map(x=>(
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

</div>
      
    </div>
    </>
    );
  };

export default ApplicationDetails;
