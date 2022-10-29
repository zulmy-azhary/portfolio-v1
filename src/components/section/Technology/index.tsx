import React, { useState } from "react";
import styled from "styled-components";
import { TechIcon, TechTabList } from "components/main";
import { Container, Description, Heading, SubHeading } from "styles/SharedComponents";
import type { TabList, Technology } from "types";
import { technologies } from "helper/data";
import { device } from "helper/devices";
import { AnimatePresence } from "framer-motion";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1.5rem;

  @media ${device.tablet} {
    padding: 0 3rem;
    /* gap: 3rem; */
  }
`;

const TechStack: React.FC = () => {
  // const [technology, setTechnology] = useState<Technology>({} as Technology);
  const [tabSelected, setTabSelected] = useState<TabList>("View All");

  // const itemHandler = (itemName: string): void => {
  //   setTechnology(
  //     technologies.find(({ name }: Technology): boolean => name === itemName) as Technology
  //   );
  // };

  return (
    <Container id="technologies">
      <SubHeading>Tools & Tech</SubHeading>
      <Heading>Tech Stack</Heading>
      <Description>
        Here are a few tools and technologies that i've been used to build websites.
      </Description>
      <AnimatePresence mode="wait" initial={false}>
        <Wrapper key={tabSelected}>
          <TechTabList tabSelected={tabSelected} setTabSelected={setTabSelected} />
          <TechIcon tabSelected={tabSelected} />
        </Wrapper>
      </AnimatePresence>
    </Container>
  );
};

export default TechStack;
