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
// Sample components for Home, About, Contact, and Join pages
const Home = () => <div> <HomePage/> </div>;
// const About = () => <div>About</div>;
// const Contact = () => <div>Contact Us</div>;
const Join = () => <div>Join Us</div>;

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} /> */}
        <Route path="/join" element={<Join />} />
      </Routes>
    </Router>
  );
};

export default App;