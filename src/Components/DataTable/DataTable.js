import React, { useState, useEffect } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@mui/material';
import { Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
const DataTable = () => {
  const [data, setData] = useState([]);
  
  const navigate = useNavigate(); // Hook for navigation in React Router v6
    // Dummy data for demonstration
    const dummyData = [
        {
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
          "requestedLoanAmount": 10000.0,
          "loanDurationInMonths": 12
        },
        {
          "mobileNumber": 9876543210,
          "name": "Jane Smith",
          "email": "jane.smith@example.com",
          "pan": "FGHIJ5678K",
          "dob": "1985-05-15",
          "gender": "Female",
          "residentialPincode": 567890,
          "residentialAddress": "456 Oak St, Villagetown",
          "annualTurnover": 700000,
          "yearsInCurrentBusiness": 7,
          "businessPincode": 123456,
          "businessAddress": "789 Factory St, Industrialtown",
          "businessRegisteredAs": "Proprietorship",
          "productCategory": "Clothing",
          "natureOfBusiness": "Wholesale",
          "businessRunBy": "Owner",
          "requestedLoanAmount": 15000.0,
          "loanDurationInMonths": 24
        }
      ];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('your_api_endpoint');
        if (response.ok) {
          const data = await response.json();
          setData(dummyData);
        } else {
          console.error('Failed to fetch data');
        }
      } catch (error) {
        setData(dummyData);
        console.error('Error:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <TableContainer component={Paper}>
    <Table aria-label="simple table">
      <TableHead>
        <TableRow style={{ backgroundColor: '#f0f0f0' }}>
          <TableCell><b>Mobile Number</b></TableCell>
          <TableCell><b>Name</b></TableCell>
          <TableCell><b>Email</b></TableCell>
          <TableCell><b>PAN</b></TableCell>
          <TableCell><b>DOB</b></TableCell>
          <TableCell><b>Annual Turnover</b></TableCell>
          <TableCell><b>Years in Current Business</b></TableCell>
          <TableCell><b>Requested Loan Amount</b></TableCell>
          <TableCell><b>Loan Duration (Months)</b></TableCell>
          <TableCell></TableCell> {/* Empty cell for the update button */}
        </TableRow>
      </TableHead>
      <TableBody >
        {data.map((row, index) => (
          <TableRow  onClick={()=>{
            navigate("/home/"+row.mobileNumber,{ state:{ row } });
          }} key={index}>
            <TableCell>{row.mobileNumber}</TableCell>
            <TableCell>{row.name}</TableCell>
            <TableCell>{row.email}</TableCell>
            <TableCell>{row.pan}</TableCell>
            <TableCell>{row.dob}</TableCell>
            <TableCell>{row.annualTurnover}</TableCell>
            <TableCell>{row.yearsInCurrentBusiness}</TableCell>
            <TableCell>{row.requestedLoanAmount}</TableCell>
            <TableCell>{row.loanDurationInMonths}</TableCell>
            <TableCell>
            <Button type="submit" variant="contained" color="primary" fullWidth>
                Update
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
      );
    };

export default DataTable;
