import React from "react";
import styled from "styled-components";
import { Heading, SubHeading } from "@styles/SharedComponents";
import { motion } from "framer-motion";
import { fadeIn } from "@styles/motionVariants";
import { defaultTransition } from "../styles/motionVariants";

const Container = styled(motion.section)`
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  margin: 2rem 0;
  position: relative;

  @media (min-width: ${(props) => props.theme.breakpoints.laptop}) {
    min-height: 100vh;
    text-align: left;
    margin: 0;
  }
`;

const HomeHeading = styled(Heading)`
  /* background: linear-gradient(to right bottom, #5817a7, #137eaf);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent; */
  font-size: 1.75rem;

  @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
    font-size: 2rem;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.laptop}) {
    font-size: 3rem;
  }
`;

const Description = styled.p`
  font-family: var(--comicNeue);
  color: var(--skyText);
  line-height: 2;
  font-weight: 500;
  margin-bottom: 1.75rem;
  font-size: 1.1rem;
  transition: color 0.3s;

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
    <Container
      id="home"
      variants={fadeIn}
      initial="initial"
      animate="animate"
      transition={transition}
    >
      <SubHeading
        as={motion.h2}
        variants={fadeIn}
        transition={{ ...defaultTransition, delay: 0.6 }}
      >
        Introduction
      </SubHeading>
      <HomeHeading
        as={motion.h1}
        variants={fadeIn}
        transition={{ ...defaultTransition, delay: 0.7 }}
      >
        Front End Developer
      </HomeHeading>
      <Description
        as={motion.p}
        variants={fadeIn}
        transition={{ ...defaultTransition, delay: 0.8 }}
      >
        Design, building, and maintaining interactive and responsive websites especially for modern
        websites.
      </Description>
    </Container>
  );
};

const transition = {
  ...defaultTransition,
  delay: 0.5,
};

export default Home;
