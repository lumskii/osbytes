import React from 'react';
import Logo from "../../images/logo_symbol.svg";
import { LogoBrand } from '../Navbar/NavbarElements';
import { 
    Container, 
    Form, 
    FormButton, 
    FormContent, 
    FormH1, 
    FormWrap, 
    Icon, 
} from './SigninElements';

const SignIn = () => {
  return (
    <Container>
      <FormWrap>
        <Icon to="/">
          <LogoBrand src={Logo} />
        </Icon>
        <FormContent>
          <Form action="#">
            <FormH1>Hope to talk to you soon!</FormH1>
            <FormButton
              href="mailto:olusholola2@gmail.com"
              target="_blank"
              aria-label="Email"
            >
              Continue
            </FormButton>
          </Form>
        </FormContent>
      </FormWrap>
    </Container>
  );
}

export default SignIn;