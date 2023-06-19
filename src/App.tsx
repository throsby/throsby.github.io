import './App.css';
import Header from './Header';
import Contact from './Contact/Contact';
import Landing from './Landing';
import {
  Routes,
  Route
} from "react-router-dom";
import LandingPage from './LandingPage/LandingPage';
import About from './About/About';
import Footer from './Footer';
import { useEffect } from 'react';


function App() {
  useEffect(() => {
    async function fetchGreenhouses() {
      let req = await fetch(`https://lingering-wood-1850.fly.dev/greenhouses`)
      let res = await req.json()
    }
    fetchGreenhouses()
  }, [])

  return (
    <>
      <Header/>

      <Routes>
        <Route path="/" element={<LandingPage />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/contact" element={<Contact />}/>
      </Routes>

      {/* <Footer /> */}
    </>
  );
}

export default App;
