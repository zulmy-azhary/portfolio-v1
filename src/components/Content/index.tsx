import React from "react";
import styled from "styled-components";
import { useScroll } from "../../context";
import { device } from "../../helper/devices";
import type { Scroll } from "../../types";
import { Home, Profile, Biography, Projects, TechStack, Footer } from "../";

const Container = styled.main`
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 500ms;
  display: flex;
  flex-direction: column-reverse;

  @media ${device.laptop} {
    flex-direction: row;
  }
`;

const Wrapper = styled.div<Scroll>`
  transition-duration: 500ms;

  @media ${device.laptop} {
    flex-basis: 70%;
  }

  @media ${device.laptopL} {
    flex-basis: ${props => props.scrollState ? 75 : 65}%;
  }
`;

const ProfileWrapper = styled.div<Scroll>`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  @media ${device.laptop} {
    flex-basis: 30%;
  }

  @media ${device.laptopL} {
    flex-basis: ${props => props.scrollState ? 25 : 35}%;
  }
`;

const Main = styled.div`
  padding: 0 1.25rem;

  @media ${device.tablet} {
    padding: 0 4rem;
  }

  @media ${device.laptopL} {
    padding: 0 6rem 7rem;
  }
`;

const Content: React.FC = () => {
  const { scrollState } = useScroll();

  return (
    <Container>
      <Wrapper scrollState={scrollState}>
        <Main>
          <Home />
          <Biography />
          <Projects />
          <TechStack />
        </Main>
        <Footer />
      </Wrapper>
      <ProfileWrapper scrollState={scrollState}>
        <Profile />
      </ProfileWrapper>
    </Container>
  );
};

export default Content;