import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from './components/Contact'
import Education from "./components/Education";
import Aos from "aos";
import "aos/dist/aos.css"
import Achievements from "./components/Achievements";
import './App.css';

const App = () => {
 useEffect(() => {
  Aos.init();
  
 }, [])
 
  return (
    <>
      <Navbar />
      <div className="container">
        <Home />
        <Experience />
        <Education />
        <Skills />
        <Projects />
        <Achievements />
        <Contact />
      </div>
    </>
  );
};

export default App;
