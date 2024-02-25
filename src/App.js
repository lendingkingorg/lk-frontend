import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import HomePage from './Components/HomePage/HomePage';
import LoginForm from './Components/LoginForm/LoginForm';
import ApplicationDetails from './ApplicationDetails/ApplicationDetails';

const Home = () => <div> <HomePage/> </div>;

const App = () => {
  const [storedToken, setStoredToken] = useState(null);

  useEffect(() => {
    // Retrieve token from local storage when component mounts
    const token = localStorage.getItem('token');
    if (token) {
      setStoredToken(token);
    }
  }, []);

  return (
    <>
      <Navbar />
      <Router>
        <Routes>
          {storedToken ? (
            <>
              <Route path="/home" element={<Home />} />
              <Route path="/home/:id" element={<ApplicationDetails />} />
              <Route path="/*" element={<Home />} />
            </>
          ) : (
            <>            
            <Route path="/login" element={<LoginForm />} />
            <Route path="/*" element={<LoginForm />} />
            </>
          )}
        </Routes>
      </Router>
    </>
  );
};

export default App;
