import React from "react";
import {
  DarkOverlay,
  LandingWrapper,
  LandingInner,
  ButtonsWrapper,
  Button,
  LandingTitle,
  LandingSubtitle,
} from "./StyledMain";

const Main = () => {
  return (
    <LandingWrapper>
      <DarkOverlay>
        <LandingInner>
          <LandingTitle>Developer Connector </LandingTitle>
          <LandingSubtitle>
            Create Developer Profile / portfolio, share posts and get help from
            other developers
          </LandingSubtitle>
          <ButtonsWrapper>
            <Button current={true}>Login</Button>
            <Button>Register</Button>
          </ButtonsWrapper>
        </LandingInner>
      </DarkOverlay>
    </LandingWrapper>
  );
};

export default Main;
