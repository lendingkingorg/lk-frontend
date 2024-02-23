// import './App.css';
// import Navbar from './Components/Navbar/Navbar';
// import HomePage from './Components/HomePage/HomePage';

// function App() {
//   return (
//     <div>
//       <Navbar />
//       <HomePage />
//     </div>
//   );
// }

// export default App;
// Import necessary dependencies
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import HomePage from './Components/HomePage/HomePage';
import LoginForm from './Components/LoginForm/LoginForm';
import ApplicationDetails from './ApplicationDetails/ApplicationDetails';
const Home = () => <div> <HomePage/> </div>;

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<LoginForm/>} />
        <Route path="/home" element={<Home />} />
        <Route path="/home/:id" element={<ApplicationDetails />} />
      </Routes>
    </Router>
  );
};

export default App;