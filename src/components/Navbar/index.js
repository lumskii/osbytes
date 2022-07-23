import React, {useState, useEffect} from 'react';
import {
  FaBars,
} from "react-icons/fa";
import Logo from '../../images/logo_symbol.svg';
import {IconContext} from 'react-icons/lib';
import {animateScroll as scroll} from 'react-scroll';
import Icon1 from "../../images/Olumide_Sholola_Resume.pdf";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink,
  LogoBrand
} from "./NavbarElements";

const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', changeNav);
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    //this enables color changes for icons on the navbar
    <IconContext.Provider value={{ color: "#f9bc23" }}>
      <Nav scrollNav={scrollNav}>
        <NavbarContainer>
          <NavLogo to="/" onClick={toggleHome}>
            <LogoBrand src={Logo} />
          </NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks
                to="about"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                About
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="experience"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                Experience
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="work"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                Work
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="contact"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                Contact
              </NavLinks>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <NavBtnLink
              to={Icon1}
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={-80}
            >
              Resume
            </NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </IconContext.Provider>
  );
}

export default Navbar;