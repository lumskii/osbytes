import styled from "styled-components";

export const ContactContainer = styled.div`
  display: flex;
  justify-content: center;
  background: #0a192f;
  align-items: center;
  padding: 0 30px;
  min-height: 100vh;
  position: relative;
  z-index: 1;
`;

export const ContactContent = styled.div`
  z-index: 3;
  max-width: 1200px;
  position: absolute;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  top: auto;
`;

export const ContactP = styled.p`
  margin-top: 24px;
  color: #a8b2d1;
  font-size: 18px;
  text-align: center;
  max-width: 600px;

  @media screen and (max-width: 768px) {
    font-size: 18px;
  }

  @media screen and (max-width: 480px) {
    font-size: 12px;
  }
`;