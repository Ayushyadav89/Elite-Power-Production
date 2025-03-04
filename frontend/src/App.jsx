import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter as Router } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import './App.css'
import Navbar from './components/Navbar'
import View from './components/View';
import WorkOutSession from './components/WorkOutSession';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => {
  return (
    <Router>
      <Navbar />
      <View />
      <WorkOutSession />
      <Gallery />
      <div id="contact-section">
        <Contact />
      </div>
      <Footer />
      <ToastContainer theme="dark" position="top-center" />
    </Router>
  )
}

export default App
