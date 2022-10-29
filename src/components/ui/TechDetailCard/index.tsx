import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import styled from "styled-components";
import { device } from "helper/devices";
import { Card } from "styles/SharedComponents";
import { roundedLg } from "styles/SharedStyles";
import type { Technology } from "types";

const InitialDesc = styled.p`
  transition-duration: 300ms;
`;

const ContentDesc = styled.div`
  text-align: justify;
  transition-duration: 300ms;
`;

const Title = styled.p`
  font-weight: 600;
  transition-duration: 300ms;
  text-align: center;
  font-size: 1.5rem;
  line-height: 2rem;
`;

const SubTitle = styled.p`
  transition-duration: 300ms;
  text-align: center;
  font-size: 0.8rem;
  color: rgb(var(--blue) / 0.75);
`;

const ContentCard = styled(Card)`
  flex-direction: column;
  grid-column: span 12 / span 12;
  grid-row: span 6 / span 6;
  padding: 2rem;
  color: rgb(var(--blue));

  &:hover {
    ${roundedLg}
    ${InitialDesc}, ${Title} {
      color: rgb(var(--teal));
    }
  }

  svg {
    margin: 0 auto;
    transition-duration: 300ms;
  }

  @media ${device.tablet} {
    grid-column: span 6 / span 6;
    grid-row: span 5 / span 5;
  }

  @media ${device.laptop} {
    grid-column: span 8 / span 8;
    grid-row: span 4 / span 4;
  }

  @media ${device.laptopL} {
    padding: 4rem 2rem;
    grid-column: span 6 / span 6;
  }
`;

const Content = styled(motion.div)`
  width: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 2.5rem;

  @media ${device.tablet} {
    row-gap: 3rem;
  }
`;

const Main = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column-reverse;
  row-gap: 1.25rem;

  @media ${device.laptopL} {
    flex-direction: row;
  }
`;

const Group = styled.div`
  text-align: center;
  flex-basis: 50%;
`;

const TextDesc = styled.p`
  font-size: 1rem;
  line-height: 1.75rem;
  color: rgb(var(--blue) / 0.9);
`;

interface Props {
  technology: Technology;
}

const TechDetailCard: React.FC<Props> = ({ technology }) => {
  const { name, type, releaseDate, desc, Icon } = technology;

  return (
    <ContentCard>
      {Object.keys(technology).length ? (
        <AnimatePresence mode="wait">
          <Content
            key={name}
            variants={contentVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.5, type: "linear" }}
          >
            <Main>
              <Group>
                <Icon />
              </Group>
              <Group>
                <Title>{name}</Title>
                <SubTitle>Type: {type}</SubTitle>
                <SubTitle>Release Date: {releaseDate}</SubTitle>
              </Group>
            </Main>
            <ContentDesc>
              <TextDesc>{desc}</TextDesc>
            </ContentDesc>
          </Content>
        </AnimatePresence>
      ) : (
        <InitialDesc>Click item for more details</InitialDesc>
      )}
    </ContentCard>
  );
};

const contentVariants = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 30 },
};

export default TechDetailCard;
