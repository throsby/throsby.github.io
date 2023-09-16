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
      let req = await fetch(`https://cool-lake-5286.fly.dev/greenhouses`)
      let res = await req.json()
    }
    fetchGreenhouses()
  }, [])

  return (
    <>
      <Header/>

      <!-- Google tag (gtag.js) -->
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-9CKWN2Z0ZD"></script>
      <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-9CKWN2Z0ZD');
      </script>

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
