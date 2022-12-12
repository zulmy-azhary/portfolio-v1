import React from "react";
import styled from "styled-components";
import { Heading, SubHeading } from "@styles/SharedComponents";

const Container = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  margin: 2rem 0;

  @media (min-width: ${(props) => props.theme.breakpoints.laptop}) {
    min-height: 100vh;
    text-align: left;
    margin: 0;
  }
`;

const HomeHeading = styled(Heading)`
  @media (min-width: ${(props) => props.theme.breakpoints.laptop}) {
    font-size: 2.5rem;
  }
`;

const Description = styled.p`
  font-family: var(--comicNeue);
  color: rgb(var(--blue) / 0.5);
  line-height: 2;
  font-weight: 500;
  transition-duration: 300ms;
  margin-bottom: 1.75rem;

  &:hover {
    color: var(--teal);
  }

  @media (min-width: ${(props) => props.theme.breakpoints.laptop}) {
    font-size: 1.25rem;
    line-height: 2rem;
    margin: 1.5rem 0 3rem;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.laptopL}) {
    font-size: 1.5rem;
    line-height: 2.25rem;
  }
`;

const Home: React.FC = () => {
  return (
    <Container id="home">
      <SubHeading>Introduction</SubHeading>
      <HomeHeading>Front End Developer</HomeHeading>
      <Description>
        Design, building, and maintaining interactive and responsive websites especially for modern
        websites.
      </Description>
    </Container>
  );
};

export default Home;
