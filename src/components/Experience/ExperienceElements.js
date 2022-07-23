import styled from "styled-components";

export const TopLineThree = styled.p`
  color: #f9bc23;
  font-size: 28px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: -2px;
  margin: 10px 0px 50px 0px;
  max-width: 620px;
  margin-left:auto;
  margin-right: auto;
  top: 100px;
  position: relative;

  &:after {
    content: "";
    display: block;
    position: relative;
    top: -8px;
    width: 280px;
    height: 1px;
    margin-left: 350px;
    background-color: #a8b2d1;
  }
`;

export const TopLineFour = styled.p`
  color: #f9bc23;
  font-size: 28px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: -2px;
  margin: 10px 0px 50px 0px;
  max-width: 620px;
  margin-left: auto;
  margin-right: auto;
  top: 35px;
  position: relative;

  &:after {
    content: "";
    display: block;
    position: relative;
    top: -8px;
    width: 280px;
    height: 1px;
    margin-left: 250px;
    background-color: #a8b2d1;
  }
`;