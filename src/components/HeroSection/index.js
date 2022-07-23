import React, {useState} from 'react';
// import Video from '../../videos/video.mp4'
import {Button} from '../ButtonElements';
import { TopLine } from '../InfoSection/InfoElements';
import { 
    HeroContainer, 
    HeroBg, 
    // VideoBg,
    HeroContent,
    HeroH1,
    HeroP,
    HeroBtnWrapper,
    ArrowForward,
    ArrowRight,
    HeroH2
} from './HeroElements';

const HeroSection = () => {
    const [hover, setHover] =useState(false)

    const onHover = () => {
        setHover(!hover)
    }

  return (
    <HeroContainer id="home">
      <HeroBg>
        {/* <VideoBg autoPlay loop muted src={Video} type="video/mp4" /> */}
      </HeroBg>
      <HeroContent>
        <TopLine>Hi, my name is</TopLine>
        <HeroH1>Olumide Sholola</HeroH1>
        <HeroH2>A front-end web developer.</HeroH2>
        <HeroP>
          I'm a software developer with areas of specialties in HTML, CSS,
          JavaScript, and framework such as React. I focus on making
          visually pleasing user interfaces.
        </HeroP>
        <HeroBtnWrapper>
          <Button
            to="about"
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
            Get started {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
}

export default HeroSection