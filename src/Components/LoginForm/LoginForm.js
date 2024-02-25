import React, { useState } from 'react';
import { TextField, Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); // Hook for navigation in React Router v6
  const fetchData = async () => {
    try {
      const response = await fetch(`http://lendingking-test.eu-central-1.elasticbeanstalk.com/admin-login/${password}/${username}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
    //  console.log("data","NO_ACCESS".localeCompare(data.token));

const val="NO_ACCESS".localeCompare(data.token);
     if(data.token) {
     localStorage.setItem('token', data.token);
     navigate("/home");
     window.location.reload();
    }
     else  localStorage.setItem('token', null);
   //   setResponseData(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };


  const handleLogin = async (e) => {
    e.preventDefault();
      fetchData();
    

    // try {
    //   const response = await fetch('your_api_endpoint', {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify({ username, password }),
    //   });

    //   if (response.ok) {
    //     const data = await response.json();
    //     localStorage.setItem('token', data.token);
    //   } else {
    //     setError('Invalid username or password');
    //   }
    // } catch (error) {
    //   console.error('Error:', error);
    //   setError('Something went wrong. Please try again later.');
    // }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <div style={{ width: '300px', padding: '20px', border: '1px solid #ccc', borderRadius: '5px' }}>
        <Typography variant="h5" gutterBottom style={{ marginBottom: '20px', textAlign: 'center' }}>
          Login
        </Typography>
        {error && <Typography variant="body2" color="error" gutterBottom style={{ marginBottom: '10px' }}>{error}</Typography>}
        <form onSubmit={handleLogin}>
          <TextField
            label="Username"
            variant="outlined"
            fullWidth
            margin="normal"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextField
            label="Password"
            type="password"
            variant="outlined"
            fullWidth
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button type="submit" variant="contained" color="primary" fullWidth style={{ marginTop: '20px' }}>
            Login
          </Button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
