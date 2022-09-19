import { useContext, useEffect } from "react";
import styled from "styled-components";
import { ScrollContext } from "../../context";
import { device } from "../../helper/devices";
import type { ScrollCtx } from "../../types";
import { Home, Profile, Biography, Projects, Skills, Footer } from "../";
import { useScroll } from "framer-motion";

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

const Wrapper = styled.div<Partial<ScrollCtx>>`
  transition-duration: 500ms;

  @media ${device.laptop} {
    flex-basis: ${props => props.scrollState ? 75 : 66.666667 }%;
  }
`;

const ProfileWrapper = styled.div<Partial<ScrollCtx>>`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  transition-duration: 500ms;
  padding: 4rem 0;
  width: 100%;

  &:hover ::before, &:hover ::after {
    border-color: rgb(var(--teal));
  }

  @media ${device.laptop} {
    border-left-width: 1px;
    border-color: rgb(var(--blue) / 0.3);
    flex-basis: 33.333333%;

    &:hover {
      border-color: rgb(var(--teal));
    }
  }

  @media ${device.laptopL} {
    flex-basis: ${props => props.scrollState ? 25 : 33.333333}%;
  }
`;

const Main = styled.div`
  padding: 0 1.25rem;

  @media ${device.tablet} {
    padding: 0 5rem;
  }

  @media ${device.laptopL} {
    padding: 0 7rem 7rem;
  }
`;

const Content = (): JSX.Element => {
  const { scrollState } = useContext(ScrollContext);

  return (
    <Container>
      <Wrapper scrollState={scrollState}>
        <Main>
          <Home />
          <Biography />
          <Projects />
          <Skills />
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