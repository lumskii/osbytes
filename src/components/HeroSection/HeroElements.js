import styled from 'styled-components'
import { MdArrowDropDown, MdKeyboardArrowDown } from 'react-icons/md';

export const HeroContainer = styled.div`
  display: flex;
  justify-content: center;
  background: #0a192f;
  align-items: center;
  padding: 0 30px;
  min-height: 100vh;
  position: relative;
  z-index: 1;

  // :before {
  //   content: '';
  //   position: absolute;
  //   top: 0;
  //   left: 0;
  //   right: 0;
  //   bottom: 0;
  //   background: linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.6) 100%), 
  //   linear-gradient(180deg, rgba(0,0,0,0.2) 0%, transparent 100%);
  //   z-index: 2;
  // }
`;

export const HeroBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  `;

  export const VideoBg = styled.video`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  background: #232a34;
  `;

export const HeroContent = styled.div`
    z-index: 3;
    max-width: 1200px;
    position: absolute;
    padding: 8px 24px;
    display: flex;
    flex-direction: column;
    align-items: left;
    top: auto;
  `

export const HeroH1 = styled.h1`
  color: #fff;
  font-size: clamp(48px, 5vw, 60px);
  text-align: left;

  @media screen and (max-width: 768px) {
    font-size: 40px;
  }

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const HeroH2 = styled.h1`
  color: #a8b2d1;
  font-size: clamp(48px, 5vw, 60px);
  text-align: left;

  @media screen and (max-width: 768px) {
    font-size: 40px;
  }

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const HeroP = styled.p`
  margin-top: 24px;
  color: #a8b2d1;
  font-size: 18px;
  text-align: left;
  max-width: 600px;

  @media screen and (max-width: 768px) {
    font-size: 18px;
  }

  @media screen and (max-width: 480px) {
    font-size: 12px;
  }
`;

export const HeroBtnWrapper = styled.div`
  display: flex;
  margin-top: 32px;
  flex-direction: grid;
  align-items: center;
`;

export const ArrowForward = styled(MdArrowDropDown)`
  margin-left: 8px;
  font-size:20px;
`;

export const ArrowRight = styled(MdKeyboardArrowDown)`
  margin-left: 8px;
  font-size:20px;
`;