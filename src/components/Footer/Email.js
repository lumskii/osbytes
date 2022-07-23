import React from 'react';
import {
  RightStyledElements,
  SocialIconsTwo,
  SocialLinkTwo,
} from "./NavStyles";

const Email = () => {
  return (
    <RightStyledElements>
      <SocialIconsTwo>
          <SocialLinkTwo href="mailto:olusholola2@gmail.com" target="_blank" aria-label="Email">
            olusholola2@gmail.com
          </SocialLinkTwo>
      </SocialIconsTwo>
    </RightStyledElements>
  );
}

export default Email