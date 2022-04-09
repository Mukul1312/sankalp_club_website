import './App.css';
import Banner from './components/Banner/Banner';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Gallery from './components/Gallery/Gallery';
import Navbar from './components/Navbar/Navbar';
import Team from './components/Team/Team';
import Signin from './components/Signin/Signin';
import { Routes, Route } from "react-router-dom";
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import Donate from './components/Donate/Donate';

function App() {
  return (
    <>
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