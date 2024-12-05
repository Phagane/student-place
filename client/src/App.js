import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from "./components/Layouts/Footer";
import Homepage from "./components/Homepage/Homepage";
import AboutUs from "./components/About/AboutUs";
import ContactUs from "./components/Contact Us/ContactUs";
import Offerings from "./components/Offerings/Offerings";

const App = () => {
  return (
    <div className='app'>
      <main className='app-main'>
        <Routes>
        <Route path="/" element={<Homepage />}/>
        <Route path="/about" element={<AboutUs />}/>
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/offerings" element={<Offerings />} />
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