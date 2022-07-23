import React from 'react';
import { TopLineTwo } from '../InfoSection/InfoElements';
import {
    AboutContainer,
    AboutWrapper,
    AboutRow,
    AboutColumn1,
    AboutColumn2,
    AboutTextWrapper,
    AboutDescription,
    AboutUl,
    AboutLi,
    AboutImgWrap,
    AboutImg,
    Highlight
} from './AboutElements';

const About = () => {
  return (
    <AboutContainer id="about">
      <AboutWrapper>
        <AboutRow>
          <AboutColumn1>
            <AboutTextWrapper>
              <TopLineTwo>About Me</TopLineTwo>
              <AboutDescription>
                Hello, I am Olumide, a self-taught front-end web developer. I am
                a creatively driven individual with extensive front-end
                development experience. I am a business graduate who
                transitioned into tech back in 2019.
              </AboutDescription>
              <AboutDescription>
                During these three years, I have always tried to better myself
                by engaging with tools that help bring a good design idea to
                life.
              </AboutDescription>
              <AboutDescription>
                I have experience working with HTML, and CSS and a year of
                experience working with JavaScript and utilizing framework
                library components such as
                <Highlight>
                  {" "}
                  Redux, react-dom, bootstrap, and styled-components.
                </Highlight>
              </AboutDescription>

              <AboutDescription>
                Below are a few technologies I have been recently working with:
              </AboutDescription>
              <AboutUl>
                <AboutLi>JavaScript (ES6)</AboutLi>
                <AboutLi>Node.js</AboutLi>
                <AboutLi>CSS 3</AboutLi>
                <AboutLi>React</AboutLi>
                <AboutLi>WordPress</AboutLi>
                <AboutLi>Firebase</AboutLi>
              </AboutUl>
            </AboutTextWrapper>
          </AboutColumn1>
          <AboutColumn2>
            <AboutImgWrap>
              <AboutImg></AboutImg>
            </AboutImgWrap>
          </AboutColumn2>
        </AboutRow>
      </AboutWrapper>
    </AboutContainer>
  );
}

export default About