import React from "react";
import { FaHeart } from "react-icons/fa";
import styled from "styled-components";

const Credit = styled.p`
  font-size: 0.95rem;
  color: rgb(var(--blue) / 0.75);
  transition-duration: 500ms;
`;

const Author = styled(Credit)`
  margin-top: 0.5rem;
`;

const Wrapper = styled.footer`
  transition-duration: 500ms;
  position: relative;
  border-top-width: 1px;
  border-top-style: solid;
  border-color: rgb(var(--blue) / 0.75);
  text-align: center;
  padding: 1.5rem 0;

  &:hover {
    border-color: rgb(var(--teal));
    ${Credit} {
      color: rgb(var(--teal));
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
    <Wrapper>
      <Credit>Copyright &copy; 2022. All rights reserved.</Credit>
      <Author>
        Created with{" "}
        <FaHeart style={{ display: "inline-block", color: "red", verticalAlign: "middle" }} /> by
        Zulmy Azhary
      </Author>
    </Wrapper>
  );
};

export default Footer;
