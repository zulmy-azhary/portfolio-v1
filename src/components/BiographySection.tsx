import React from "react";
import styled from "styled-components";
import { Text, Heading, SubHeading } from "@styles/SharedComponents";
import { Section } from "@components";

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 3.5rem;
  text-align: start;

  @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
    column-gap: 6rem;
    text-align: center;
    justify-content: center;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.laptop}) {
    column-gap: 13rem;
    text-align: start;
    justify-content: flex-start;
  }
`;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
  font-family: var(--comicNeue);
  font-weight: 500;
  color: rgb(var(--slate));

  @media (min-width: ${(props) => props.theme.breakpoints.laptop}) {
    font-size: 1.25rem;
    line-height: 1.75rem;
  }
`;

const Paragraph = styled(Text)`
  text-align: justify;
`;

const Label = styled(Main)`
  text-transform: uppercase;
`;

const Biography: React.FC = () => {
  return (
    <Section id="about">
      <SubHeading>About Me</SubHeading>
      <Heading>Biography</Heading>
      <Paragraph>
        Hi, my name is Zulmy Azhary and I am currently a college student pursuing a bachelor's
        degree in computer science at Unitama. In my free time, I enjoy learning about new
        technologies and programming languages and build website projects that can train me to be
        proficient in the field of Front-End development, as well as staying up to date with the
        latest trends in the field. I am a hardworking and dedicated college student with a strong
        passion for computer science, and I am looking forward to a successful career in this
        exciting and constantly evolving industry.
      </Paragraph>
      {/* <Content>
        <Label>
          <p>Name</p>
          <p>Birthday</p>
          <p>Age</p>
          <p>Address</p>
          <p>Phone</p>
          <p>Email</p>
        </Label>
        <Main>
          <p>Zulmy Azhary</p>
          <p>April, 14th 1999</p>
          <p>23 Years</p>
          <p>Makassar, Indonesia</p>
          <p>(+62) 853 4361 2564</p>
          <p>zulmyazhary32@gmail.com</p>
        </Main>
      </Content> */}
    </Section>
  );
};

export default Biography;
