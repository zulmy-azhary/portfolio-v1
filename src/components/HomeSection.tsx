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
    <Container
      id="home"
      variants={fadeIn}
      initial="initial"
      animate="animate"
      transition={transition}
    >
      <SubHeading>Introduction</SubHeading>
      <HomeHeading>Front End Developer</HomeHeading>
      <Description>
        Design, building, and maintaining interactive and responsive websites especially for modern
        websites.
      </Description>
    </Container>
  );
};

const transition = {
  ...defaultTransition,
  delay: 0.4,
};

export default Home;
