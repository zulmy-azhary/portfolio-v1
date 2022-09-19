import styled from "styled-components";
import { device } from "../helper/devices";

export const Container = styled.section`
  text-align: center;
  height: fit-content;
  max-height: max-content;
  padding: 3rem 0;

  @media ${device.laptop} {
    text-align: left;
    padding: 4rem 0;
  }
`;

export const Card = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0.375rem/* 6px */;
  border: 1px solid rgb(var(--blue) / 0.5);
  color: rgb(var(--blue) / 0.5);
  transition-duration: 300ms;

  &:hover {
    border-color: rgb(var(--teal));
    transform: translateY(-0.5rem);
  }
`;

export const Heading = styled.h1`
  position: relative;
  margin: 1.25rem 0;
  font-size: 1.875rem/* 30px */;
  line-height: 2.25rem/* 36px */;

  &:after {
    position: absolute;
    content: "";
    left: 0px;
    right: 0px;
    bottom: -0.75rem/* -12px */;
    background-color: rgb(var(--teal));
    height: 2px;
  }

  @media ${device.tablet} {
    font-size: 3rem/* 48px */;
    line-height: 1;
  }

  @media ${device.laptop} {
    margin-top: 1.25rem;
    font-size: 3rem;

    &:after {
      width: 8rem/* 128px */;
    }
  }
`;

export const SubHeading = styled.h2`
  text-transform: uppercase;
  font-weight: 500;

  @media ${device.tablet} {
    font-size: 1.125rem;
    line-height: 1.75rem;
  }

  @media ${device.laptop} {
    font-size: 1.25rem;
  }
`;

export const Description = styled.h3`
  font-weight: 500;
  text-align: center;
  margin: 1.5rem 0 2rem;

  @media ${device.tablet} {
    font-size: 1.125rem/* 18px */;
    line-height: 1.75rem/* 28px */;
  }

  @media ${device.laptop} {
    text-align: left;
    font-size: 1.5rem/* 24px */;
    line-height: 2rem/* 32px */;
  }
`;

export const Text = styled.p`
  font-size: 1.2rem;
`;

export const SubText = styled.p`
  font-size: 1rem;
`;