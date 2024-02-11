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
import { datadogRum } from '@datadog/browser-rum'


function App() {
  // console.log("window.location:", window.location)
  
  datadogRum.init({
    applicationId: '<DATADOG_APPLICATION_ID>',
    clientToken: '<DATADOG_CLIENT_TOKEN>',
    site: '<DATADOG_SITE>',
    //  service: 'my-web-application',
    //  env: 'production',
    //  version: '1.0.0',
    sessionSampleRate: 100,
    sessionReplaySampleRate: 100,
    trackResources: true,
    trackLongTasks: true,
    trackUserInteractions: true,
  });

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
        <Route path="" element={<LandingPage />}/>
        <Route path="about" element={<About />}/>
        <Route path="contact" element={<Contact />}/>
        <Route path="*" element={<Oops />}/>
      </Routes>
      
      <>      
        <Link to={"/contact"}>Contact</Link>
          <br />
        <Link to={"/about"}>About</Link>
          <br />
        <Link to={"/"}>Root</Link>
      </>
      <Footer />
    </>
  );
}

export default App;
