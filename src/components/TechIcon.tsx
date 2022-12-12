import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { technologies } from "@data";
import { Card } from "@styles/SharedComponents";
import type { TabList, Technology } from "@types";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(12, minmax(0, 1fr));
  grid-auto-rows: auto;
  grid-auto-flow: row;
  gap: 1.5rem;
`;

const IconCard = styled(Card)`
  grid-column: span 4 / span 4;
  grid-row: span 1 / span 1;
  cursor: pointer;

  /* The icons */
  svg {
    transform: scale(0.5);
  }
  &:hover * {
    cursor: pointer;
  }
  /* End of icons */

  @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
    grid-column: span 3 / span 3;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.laptopL}) {
    grid-column: span 2 / span 2;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.desktop}) {
    height: 12rem;

    svg {
      transform: scale(1);
    }
  }
`;

interface Props {
  tabSelected: TabList;
}

const TechIcon: React.FC<Props> = ({ tabSelected }) => {
  const techSelected: Technology[] =
    tabSelected === "View All"
      ? technologies
      : technologies.filter((tech: Technology) => tech.type === tabSelected);

  return (
    <Wrapper
      as={motion.div}
      variants={wrapperVariants}
      initial="initial"
      animate="opened"
      exit="closed"
    >
      {techSelected.map(({ id, name, Icon }: Technology) => (
        <IconCard
          key={id}
          title={name}
          as={motion.div}
          variants={tabVariants}
          transition={{ duration: 0 }}
          whileHover={{ translateY: -5 }}
        >
          <Icon />
        </IconCard>
      ))}
    </Wrapper>
  );
};

const wrapperVariants = {
  initial: {
    opacity: 0,
  },
  opened: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
    opacity: 1,
  },
  closed: {
    opacity: 0,
  },
};

const tabVariants = {
  initial: { x: 0, y: 100, opacity: 0 },
  opened: { x: 0, y: 0, opacity: 1 },
  closed: { x: -100, y: 0, opacity: 0, transition: { duration: 0.3 } },
};

export default TechIcon;
