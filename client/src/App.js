import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from "./components/Layouts/Footer";
import Homepage from "./components/Homepage/Homepage";
import AboutUs from "./components/About/AboutUs";

const App = () => {
  return (
    <div className='app'>
      <main className='app-main'>
        <Routes>
        <Route path="/" element={<Homepage />}/>
        <Route path="/about" element={<AboutUs />}/>
        </Routes>
      </main>
      <Footer/>
    </div>
  );
};

const AppWrapper = () => (
  <Router>
    <App />
  </Router>
);

export default AppWrapper;