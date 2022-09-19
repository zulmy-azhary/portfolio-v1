import { useState } from "react";
import { skills } from "../../helper/data";
import { Container, Description, Heading, SubHeading } from "../../styles/SharedComponents";
import styled from "styled-components";
import type { SkillTypes } from "../../types";
import { SkillDetailCard, SkillIcon } from "../";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(12, minmax(0, 1fr));
  grid-auto-rows: auto;
  grid-auto-flow: row;
  gap: 1.5rem;
`;

const Skills = (): JSX.Element => {
  const [show, setShow] = useState<SkillTypes>({} as SkillTypes);

  const itemHandler = (itemName: string): void => {
    setShow(skills.find(({ name }: SkillTypes): boolean => name === itemName) as SkillTypes);
  };

  return (
    <Container id="skills">
      <SubHeading>Tools & Skills</SubHeading>
      <Heading>Tech Stack</Heading>
      <Description>
        Here are a few tools and skills that i've been used to build websites.
      </Description>
      <Wrapper>
        <SkillDetailCard show={show} />
        <SkillIcon handler={itemHandler} />
      </Wrapper>
    </Container>
  );
};

export default Skills;
