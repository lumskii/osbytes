import React, {useState} from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import StyledElements from '../components/Footer/StyledElements';
import Email from '../components/Footer/Email';
import About from '../components/AboutMe';
import Experience from '../components/Experience';
import Work from '../components/Work';
import Contact from '../components/Contact';
// import { Scrollbars } from "react-custom-scrollbars-2";

const Home = () => {
    const[isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }


  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
      <StyledElements />
      <Email />
      <About />
      <Experience />
      <Work />
      <Contact />
    </>
  );
}

export default Home