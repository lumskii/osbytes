import React from 'react'
import { FaCodepen, FaGithub, FaLinkedin } from 'react-icons/fa';
import {
  LeftStyledElements,
  SocialIcons,
  SocialIconLinks,
  SocialLink,
} from './NavStyles';

const StyledElements = () => {
  return (
    <LeftStyledElements>
      <SocialIcons>
        <SocialIconLinks>
          <SocialLink
            href="https://www.linkedin.com/in/olumike-sholola"
            target="_blank"
            aria-label="Linkedin"
          >
            <FaLinkedin />
          </SocialLink>
        </SocialIconLinks>
        <SocialIconLinks>
          <SocialLink
            href="https://github.com/lumskii"
            target="_blank"
            aria-label="Github"
          >
            <FaGithub />
          </SocialLink>
        </SocialIconLinks>
        <SocialIconLinks>
          <SocialLink
            href="https://codepen.io/lumnous"
            target="_blank"
            aria-label="Codepen"
          >
            <FaCodepen />
          </SocialLink>
        </SocialIconLinks>
      </SocialIcons>
    </LeftStyledElements>
  );
}

export default StyledElements