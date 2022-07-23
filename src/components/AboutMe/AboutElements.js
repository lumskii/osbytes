import styled from 'styled-components';
import img from "../../images/67390011.jpeg";

export const AboutContainer = styled.div`
  color: #fff;
  background: "#0a192f";

  @media screen and (max-width: 768px) {
    padding: 100px 0;
  }
`;

export const AboutWrapper = styled.div`
  display: grid;
  z-index: 1;
  height: 860px;
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;
`;

export const AboutRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: ${({imgStart}) => imgStart ? `'col2 col1'` : `'col1 col2'`};

  @media screen and (max-width: 768px) {
    grid-template-areas: ${({imgStart}) => imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`};
  }
`;

export const AboutColumn1 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col1;
`;

export const AboutColumn2 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col2;
`;

export const AboutTextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 60px;
`;

export const AboutDescription = styled.p`
  font-size: 18px;
  max-width: 480px;
  margin-bottom: 35px;
  line-height: 24px;
  color: #a8b2d1;
  text-align: left;
`;

export const Highlight = styled.p`
  color: #f9bc23;
  display: inline;
`

export const AboutImgWrap = styled.div`
  max-width: 400px;
  max-height: 450px;
  position: relative;
  border-radius: 4px;
  box-sizing: border-box;

  &:before {
    content: "";
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 4px;
    transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
    top: 0px;
    left: 0px;
    background-color: rgba(249, 188, 35, 0.3);
    mix-blend-mode: screen;
  }

  &:hover:before {
    transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
    background-color: #000;
  }

  &:after {
    border: 2px solid #f9bc23;
    top: 20px;
    left: 20px;
    z-index: -1;
    width: 100%;
    height: 100%;
    position: absolute;
    display: block;
    content: "";
    border-radius: 4px;
    transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
  }

  &:hover:after {
    transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
    top: 15px;
    left: 15px;
  }
`;


export const AboutImg = styled.div`
  width: 100%;
  margin: -100px 0 10px 0;
  padding-right: 0;
  background-image: url(${img});
  height: 100%;
  background-repeat: no-repeat;
  aspect-ratio: auto 350 / 380;
  border-radius: 4px;

`;

export const AboutUl = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, minmax(140px, 200px));
  gap: 0px 10px;
  padding: 0px;
  margin: 20px 0px 0px;
  overflow: hidden;
  list-style: none;
`;

export const AboutLi = styled.li`
  position: relative;
  margin-bottom: 10px;
  padding-left: 20px;
  font-size: 13px;
  color: #a8b2d1;

  &:before {
    content: "▹";
    position: relative;
    left: 0px;
    color: #f9bc23;
    font-size: 14px;
    line-height: 12px;
  }
`;