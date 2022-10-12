import React, { useState } from "react";
import { teches } from "../../helper/data/teches";
import { Container, Description, Heading, SubHeading } from "../../styles/SharedComponents";
import styled from "styled-components";
import type { TechTypes } from "../../types";
import { TechDetailCard, TechIcon } from "..";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(12, minmax(0, 1fr));
  grid-auto-rows: auto;
  grid-auto-flow: row;
  gap: 1.5rem;
`;

const TechStack: React.FC = () => {
  const [show, setShow] = useState<TechTypes>({} as TechTypes);

  const itemHandler = (itemName: string): void => {
    setShow(teches.find(({ name }: TechTypes): boolean => name === itemName) as TechTypes);
  };

  return (
    <Container id="technologies">
      <SubHeading>Tools & Tech</SubHeading>
      <Heading>Tech Stack</Heading>
      <Description>
        Here are a few tools and technologies that i've been used to build websites.
      </Description>
      <Wrapper>
        <TechDetailCard show={show} />
        <TechIcon handler={itemHandler} />
      </Wrapper>
    </Container>
  );
};

export default TechStack;
