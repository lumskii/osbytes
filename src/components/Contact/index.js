import React, {useState} from 'react'
import { WebsiteRights } from '../Footer/FooterElements';
import { HeroBtnWrapper, HeroH1 } from '../HeroSection/HeroElements'
import { TopLine } from '../InfoSection/InfoElements';
import { NavBtnLink } from '../Navbar/NavbarElements';
import { ContactContainer, ContactContent, ContactP } from './ContactElements';
const Contact = () => {
    const [hover, setHover] = useState(false);

    const onHover = () => {
      setHover(!hover);
    };

  return (
    <ContactContainer id="contact">
      <ContactContent>
        <TopLine>Well, that's it for now. You can:</TopLine>
        <HeroH1>Get In Touch</HeroH1>
        <ContactP>
          I am in the market for a new opportunity at the moment and my inbox is
          always open. Feel free to reach out in my inbox and I would respond
          momentarily.
        </ContactP>
        <HeroBtnWrapper>
          <NavBtnLink
            to="/signin"
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary="true"
            dark="true"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
          >
            Say Hi!!!
          </NavBtnLink>
        </HeroBtnWrapper>
      </ContactContent>
      <WebsiteRights>
        Built & designed by Olumide Sholola, {new Date().getFullYear()}
      </WebsiteRights>
    </ContactContainer>
  );
}

export default Contact