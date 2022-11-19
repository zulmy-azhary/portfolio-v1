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

const Description = styled.h3`
  line-height: 2;
  font-weight: 500;
  transition-duration: 300ms;
  margin: 1.5rem 0 1.75rem;

  &:hover {
    color: rgb(var(--teal));
  }

  @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
    font-size: 1.25rem;
    line-height: 1.75rem;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.laptop}) {
    font-size: 1.5rem;
    line-height: 2.25rem;
    margin-bottom: 3rem;
  }
`;

const TextName = styled.p`
  color: rgb(var(--blue));
  font-family: var(--cookie);
  font-size: 3rem;
`;

const Home: React.FC = () => {
  return (
    <Container id="home">
      <SubHeading>Introduction</SubHeading>
      <Heading>Front End Developer</Heading>
      <Description>
        Design, building, and maintaining interactive and responsive websites especially for modern
        websites.
      </Description>
      <TextName>Zulmy Azhary</TextName>
    </Container>
  );
};

export default Home;
