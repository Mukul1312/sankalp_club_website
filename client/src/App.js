import './App.css';
import Banner from './components/Banner/Banner';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Gallery from './components/Gallery/Gallery';
import Navbar from './components/Navbar/Navbar';
import Team from './components/Team/Team';
import Signin from './components/Signin/Signin';
import { Routes, Route } from "react-router-dom";

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
        <Route path="/signin" element={<Signin />} />
      </Routes>
      
      <Footer />
      
    </>
  );
}

export default App;