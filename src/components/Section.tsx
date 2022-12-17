import { motion } from "framer-motion";
import React from "react";
import styled from 'styled-components';

export const Container = styled(motion.section)<{ isVisible?: boolean }>`
  text-align: center;
  height: fit-content;
  max-height: max-content;
  padding: 4rem 0;

  @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
    text-align: left;
    padding: 2.5rem 0;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.laptop}) {
    text-align: left;
    padding: 3.25rem 0;
  }
`;

type Props = {
  children: React.ReactNode;
  id: string;
};

const Section: React.FC<Props> = ({ children, id }) => {
  return (
    <Container
      id={id}
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ ease: "easeInOut", duration: 0.6 }}
      viewport={{ once: true, margin: "-150px" }}
    >
      {children}
    </Container>
  );
};

export default Section;
