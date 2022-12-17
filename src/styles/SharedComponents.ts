import styled from "styled-components";
import { flexCenter } from "@styles/SharedStyles";

export const Card = styled.div`
  ${flexCenter}
  position: relative;
  border-radius: 0.375rem /* 6px */;
  background-color: var(--secondary);
  color: rgb(var(--blue) / 0.5);
  transition-duration: 300ms;
  box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.1);

  &:hover {
    border-radius: 0.5rem 0;
    transform: translateY(-0.5rem);
    background-color: var(--bgSecondary);
  }
`;

export const Heading = styled.h1`
  position: relative;
  margin-top: 0.125rem;
  margin-bottom: 1.5rem;
  font-size: 1.5rem /* 30px */;
  font-weight: 400;

  &:after {
    position: absolute;
    content: "";
    left: 0px;
    right: 0px;
    bottom: -0.75rem /* -12px */;
    background-color: var(--teal);
    height: 2px;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.laptop}) {
    font-size: 2rem /* 48px */;
    line-height: 1;
    margin-top: 0.5rem;

    &:after {
      width: 8rem /* 128px */;
    }
  }
`;

export const SubHeading = styled.h2`
  text-transform: uppercase;
  font-weight: 500;
  font-size: 0.75rem;

  @media (min-width: ${(props) => props.theme.breakpoints.laptop}) {
    font-size: 1rem;
  }
`;

export const Description = styled.p`
  font-family: var(--comicNeue);
  font-size: 0.9rem;
  color: rgb(var(--blue) / 0.5);
  font-weight: 500;
  text-align: center;
  margin: 1.5rem 0 2rem;

  @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
    text-align: right;
    font-size: 1rem /* 18px */;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.laptop}) {
    text-align: left;
    font-size: 1.125rem;
  }
`;

export const Text = styled.p`
  color: rgb(var(--blue) / 0.5);
  font-family: Inter;
  letter-spacing: 1px;
  line-height: 1.75rem;
  font-weight: 300;
  font-size: 0.85rem;

  @media (min-width: ${(props) => props.theme.breakpoints.laptop}) {
    font-size: 1rem;
  }
`;

export const SubText = styled.p`
  font-size: 1rem;
`;
