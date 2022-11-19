import React from "react";
import styled from "styled-components";
import { type Scroll, useScroll } from "@context";
import { Profile, Footer, Home, Biography, Projects, Technology } from "@components";

const Container = styled.main`
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 500ms;
  display: flex;
  flex-direction: column-reverse;

  @media (min-width: ${(props) => props.theme.breakpoints.laptop}) {
    flex-direction: row;
  }
`;

const Wrapper = styled.div<Scroll>`
  transition-duration: 500ms;

  @media (min-width: ${(props) => props.theme.breakpoints.laptop}) {
    flex-basis: 70%;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.laptopL}) {
    flex-basis: ${(props) => (props.scroll ? "75%" : "65%")};
  }
`;

const ProfileWrapper = styled.div<Scroll>`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  @media (min-width: ${(props) => props.theme.breakpoints.laptop}) {
    flex-basis: 30%;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.laptopL}) {
    flex-basis: ${(props) => (props.scroll ? "25%" : "35%")};
  }
`;

const Main = styled.div`
  padding: 0 1.25rem;

  @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
    padding: 0 4rem;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.laptopL}) {
    padding: 0 7.5rem 7rem;
  }
`;

const Content: React.FC = () => {
  const { scroll } = useScroll();

  return (
    <Container>
      <Wrapper scroll={scroll}>
        <Main>
          <Home />
          <Biography />
          <Projects />
          <Technology />
        </Main>
        <Footer />
      </Wrapper>
      <ProfileWrapper scroll={scroll}>
        <Profile />
      </ProfileWrapper>
    </Container>
  );
};

export default Content;
