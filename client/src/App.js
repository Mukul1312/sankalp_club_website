import React, {useEffect} from 'react';
import './App.css';
import Banner from './components/Banner/Banner';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Gallery from './components/Gallery/Gallery';
import Navbar from './components/Navbar/Navbar';
import Team from './pages/Team/Team';
import Signin from './components/Signin/Signin';
import { Routes, Route, useLocation } from "react-router-dom";
import Signup from './components/Signup/Signup';
import Donate from "./pages/Donate/Donate";
import ScrollToTop from './components/ScrollToTop/ScrollToTop';

function App() {

  let location = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  
  }, [location.pathname])
  
  
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={
          <div>
            <Banner />
            <Gallery />
          </div>
        } />
        <Route path="/team" element={<Team />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/donate" element={<Donate />} />
      </Routes>
      
      <Footer />
      
    </>
  );
}

export default App;