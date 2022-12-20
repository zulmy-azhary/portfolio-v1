import React from "react";
import styled from "styled-components";
import { Text, Heading, SubHeading } from "@styles/SharedComponents";
import { Section } from "@components";

const Paragraph = styled(Text)`
  position: relative;
  display: inline-block;
  z-index: 1;
  font-weight: 400;
  text-align: justify;
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  row-gap: 0.5rem;
`;

const Biography: React.FC = () => {
  return (
    <Section id="about">
      <SubHeading>About Me</SubHeading>
      <Heading>Biography</Heading>
      <Wrapper>
        <Paragraph>
          Hi, my name is Zulmy Azhary and I am currently a college student pursuing a bachelor's
          degree in computer science at Unitama. In my free time, I enjoy learning about new
          technologies and programming languages and build website projects that can train me to be
          proficient in the field of web development, as well as staying up to date with the latest
          trends in the field. I am a hardworking and dedicated college student with a strong
          passion for computer science, and I am looking forward to a successful career in this
          exciting and constantly evolving industry.
        </Paragraph>
      </Wrapper>
    </Section>
  );
};

export default Biography;
