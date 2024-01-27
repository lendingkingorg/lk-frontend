import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import classes from '../FormElement/FormElement.module.scss'
const FormComponent = () => {
  const [formData, setFormData] = useState({
    businessName: '',
    email: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:8080/form-tbl-upload', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log('Form submitted successfully!');
      } else {
        console.error('Error submitting form:', response.statusText);
      }
    } catch (error) {
      console.error('An unexpected error occurred:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{display: "flex"
        }} className={classes.aling}>
      <TextField
        label="Business Name"
        variant="outlined"
        name="businessName"
        value={formData.businessName}
        onChange={handleChange}
        fullWidth
        style={{background: "white",borderRadius:"5px"}}
        margin="normal"
      />
      <TextField
        label="Email"
        variant="outlined"
        name="email"
        value={formData.email}
        onChange={handleChange}
        fullWidth
        style={{background: "white",borderRadius:"5px"}}
        margin="normal"
      />
      <button type="submit" variant="contained" className={classes.but}>
       <div className={classes.btnTxt} >Send</div>   
    </button>
    </form>
  );
};

export default FormComponent;
