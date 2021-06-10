import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";
//import Particles from "react-particles-js";
 
//import Navbar from "./components/Navbar";
//import Header from "./components/Header";
import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro";
import Portfolio from "./components/portfolio/Portfolio";
import Works from "./components/works/Works";
import Testimonials from "./components/testimonials/Testimonials";
import Contact from "./components/contact/Contact";
import { useState } from "react";


function  App() {
  const [menuOpen,setMenuOpen] = useState (false)
  return (
    <div className="app">
    <Topbar  menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
    
    <div className="sections">
      <Intro />
      <Portfolio />
      <Works />
      <Testimonials />
      <Contact />
    
    </div>
  
    </div>
  );
}

export default App;
