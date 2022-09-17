import React from "react";
import styled from "styled-components";
import { device } from "../../helper/devices";
import { Heading, SubHeading } from "../../styles/SharedStyles";

const Container = styled.section`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;

  @media ${device.laptop} {
    text-align: left;
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

const Home: React.FC = (): JSX.Element => {
  return (
    <Container id="home">
			<SubHeading>Introduction</SubHeading>
			<Heading>Front End Developer</Heading>
			<Description>
        Design, building, and maintaining interactive and responsive websites especially for modern websites.
      </Description>
      <p className="text-blue-200 font-['Cookie'] text-5xl">Zulmy Azhary</p>
		</Container>
  );
};

export default Home;