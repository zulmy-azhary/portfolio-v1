import React from "react";
import { FaHeart } from "react-icons/fa";
import styled from "styled-components";
import { motion } from "framer-motion";
import { defaultTransition } from "@styles/motionVariants";

const Credit = styled(motion.p)`
  font-family: var(--comicNeue);
  font-size: 0.875rem;
  color: rgb(var(--blue) / 0.75);
  transition: color 0.5s;

  @media (min-width: ${(props) => props.theme.breakpoints.laptop}) {
    font-size: 0.9rem;
  }
`;

const Author = styled(Credit)`
  margin-top: 0.5rem;
`;

const Wrapper = styled(motion.footer)`
  transition: border-color 0.5s;
  position: relative;
  border-top-width: 1px;
  border-top-style: solid;
  border-color: rgb(var(--blue) / 0.75);
  text-align: center;
  padding: 1.5rem 0;

  &:hover {
    border-color: var(--teal);
    ${Credit} {
      color: var(--teal);
    }
  }

  @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
    padding-top: 2rem;
    padding-bottom: 2rem;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.laptop}) {
    text-align: start;
    padding-left: 4rem;
    padding-right: 4rem;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.laptopL}) {
    padding-left: 6rem;
    padding-right: 6rem;
  }
`;

const Footer: React.FC = () => {
  return (
    <Wrapper
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={defaultTransition}
      viewport={{ once: true }}
    >
      <Credit
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={defaultTransition}
      >
        Copyright &copy; 2022. All rights reserved.
      </Credit>
      <Author
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ ...defaultTransition, delay: 0.05 }}
      >
        Created with{" "}
        <FaHeart style={{ display: "inline-block", color: "red", verticalAlign: "middle" }} /> by
        Zulmy Azhary
      </Author>
    </Wrapper>
  );
};

export default Footer;
