import React from "react";
import styled from "styled-components";
import { device } from "../../helper/devices";
import { Heading, SubHeading } from "../../styles/SharedComponents";

const Container = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  margin: 2rem 0;
  
  @media ${device.laptop} {
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

  &:hover{
    color: rgb(var(--teal));
  }

  @media ${device.tablet} {
    font-size: 1.25rem;
    line-height: 1.75rem;
  }

  @media ${device.laptop} {
    font-size: 1.875rem;
    line-height: 2.25rem;
    margin-bottom: 3rem;
  }
`;

const TextName = styled.p`
  color: rgb(var(--blue));
  font-family: "Cookie";
  font-size: 3rem;
`;

const Home: React.FC = () => {
  return (
    <Container id="home">
			<SubHeading>Introduction</SubHeading>
			<Heading>Front End Developer</Heading>
			<Description>
        Design, building, and maintaining interactive and responsive websites especially for modern websites.
      </Description>
      <TextName>Zulmy Azhary</TextName>
		</Container>
  );
};

export default Home;