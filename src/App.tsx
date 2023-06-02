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



function App() {


  return (
    <>
      <Header/>

      <Routes>
        <Route path="/" element={<LandingPage />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/contact" element={<Contact />}/>
      </Routes>

      <Footer />
    </>
  );
}

export default App;
