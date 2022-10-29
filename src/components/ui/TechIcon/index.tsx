import React from "react";
import styled from "styled-components";
import { technologies } from "helper/data";
import { device } from "helper/devices";
import { Card } from "styles/SharedComponents";
import type { TabList, Technology } from "types";
import { motion } from "framer-motion";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(12, minmax(0, 1fr));
  grid-auto-rows: auto;
  grid-auto-flow: row;
  gap: 1.5rem;
`;

const IconCard = styled(Card)`
  grid-column: span 6 / span 6;
  grid-row: span 1 / span 1;
  height: 10rem;
  cursor: pointer;
  padding: 0;
  transition: none;

  /* The icons */
  svg {
    scale: 0.75;
  }
  &:hover * {
    cursor: pointer;
  }
  /* End of icons */

  @media ${device.tablet} {
    grid-column: span 3 / span 3;
    height: 7.5rem;
  }

  @media ${device.laptop} {
    grid-column: span 4 / span 4;
    height: 10rem;
  }

  @media ${device.laptopL} {
    grid-column: span 3 / span 3;
  }

  @media ${device.desktop} {
    grid-column: span 2 / span 2;
  }
`;

interface Props {
  tabSelected: TabList;
}

const TechIcon: React.FC<Props> = ({ tabSelected }) => {
  const techSelected =
    tabSelected !== "View All"
      ? technologies.filter((tech: Technology) => tech.type === tabSelected)
      : technologies;

  return (
    <Wrapper>
      {techSelected.map(({ id, name, Icon }: Technology) => (
        <IconCard
          key={id}
          title={name}
          as={motion.div}
          variants={tabVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{
            type: "linear",
            duration: 0.7
          }}
        >
          <Icon />
        </IconCard>
      ))}
    </Wrapper>
  );
};

const tabVariants = {
  initial: { x: 100, opacity: 0 },
  animate: { x: 0, opacity: 1 },
  exit: { x: -100, opacity: 0 },
  transition: {
    type: "linear",
    duration: 0.3,
  }
};

export default TechIcon;
