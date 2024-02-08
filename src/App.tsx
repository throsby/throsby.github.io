import './App.css';
import Header from './Header';
import Contact from './Contact/Contact';
import Landing from './Landing';
import {
  Routes,
  Route,
  Link
} from "react-router-dom";
import LandingPage from './LandingPage/LandingPage';
import About from './About/About';
import Footer from './Footer';
import { useEffect } from 'react';
import Oops from './Oops/Oops';



function App() {
  // console.log("window.location:", window.location)
  

  useEffect(() => {
    async function fetchGreenhouses() {
      let req = await fetch(`https://cool-lake-5286.fly.dev/greenhouses`)
      let res = await req.json()
    }
    fetchGreenhouses()

  }, [])

  return (
    <>
      <Header/>

      <Routes>
        <Route path="/" element={<LandingPage />}/>
        <Route path="about" element={<About />}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path="/*" element={<Oops />}/>
      </Routes>
      
      <>      
        <Link to={"/contact"}>Contact</Link>
          <br />
        <Link to={"/about"}>About</Link>
          <br />
        <Link to={"/"}>Root</Link>
      </>
      {/* <Footer /> */}
    </>
  );
}

export default App;
