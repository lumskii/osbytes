import styled from 'styled-components'


export const LeftStyledElements = styled.div`
  width: 40px;
  position: fixed;
  bottom: 0px;
  left: 40px;
  right: auto;
  z-index: 10;
  color: #a8b2d1;
  display: block;
  box-sizing: border-box;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const RightStyledElements = styled.div`
  width: 40px;
  position: fixed;
  bottom: 0px;
  right: 40px;
  left: auto;
  z-index: 10;
  color: #a8b2d1;
  display: block;
  box-sizing: border-box;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const SocialIcons = styled.ul`
    display: flex;
    flex-direction: column;
    -webkit-box-align: center;
    align-items: center;
    margin: 0px;
    padding: 0px;
    list-style: none;

    &:after {
        content: "";
        display: block;
        width: 1px;
        height: 90px;
        margin: 0px auto;
        background-color: #a8b2d1;
    }
`

export const SocialIconsTwo = styled.ul`
  display: flex;
  flex-direction: column;
  -webkit-box-align: center;
  align-items: center;
  margin: 0px;
  padding: 0px;
  list-style: none;

  &:after {
    content: "";
    display: block;
    width: 1px;
    height: 90px;
    margin: 0px auto;
    background-color: #a8b2d1;
  }
`;

export const SocialIconLinks = styled.li`
    display: list-item;
    margin-bottom: 18px;
`

export const SocialLink = styled.a`
  display: inline-block;
  text-decoration: none;
  text-decoration-skip-ink: auto;
  font-size: 25px;
  color: inherit;
  position: relative;
  transition: all 0.3s ease-in-out;

  &:hover {
    color: #f9bc23;
    transform: scale(1.5);
    transition: all 0.3s ease-in-out;
  }
`;

export const SocialLinkTwo = styled.a`
  display: inline-block;
  text-decoration: none;
  text-decoration-skip-ink: auto;
  font-size: 16px;
  color: inherit;
  position: relative;
  transition: all 0.3s ease-in-out;
  writing-mode: vertical-rl;
  margin: 20px auto;
  line-height: 18px;
  letter-spacing: 0.1em;

  &:hover {
    color: #f9bc23;
    transition: all 0.3s ease-in-out;
    transform: scale(1.05);
  }
`;  