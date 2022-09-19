import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import styled from "styled-components";
import { device } from "../../helper/devices";
import { Card } from "../../styles/SharedComponents";
import { roundedMd } from "../../styles/SharedStyles";
import type { SkillTypes } from "../../types";


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
  font-size: 1rem;
  color: rgb(var(--blue) / 0.5);
`;

const ContentCard = styled(Card)`
  ${roundedMd}
  flex-direction: column;
  padding: 4rem 2rem;
  grid-column: span 12 / span 12;
  grid-row: span 6 / span 6;

  &:hover :is(${InitialDesc}, ${ContentDesc}, ${Title}) {
    color: rgb(var(--teal));
  }

  &:hover ${SubTitle} {
    color: rgb(var(--blue));
  }

  @media ${device.tablet} {
    grid-column: span 6 / span 6;
    grid-row: span 5 / span 5;
  }

  @media ${device.laptopL} {
    grid-row: span 4 / span 4;
  }
`;

const Content = styled(motion.div)`
  width: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 1rem;

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

  @media ${device.laptop} {
    flex-direction: row;
  }
`;

const Group = styled.div`
  flex-basis: 50%;
`;

const TextDesc = styled.p`
  font-size: 1.125rem;
  line-height: 1.75rem;
`;

interface Props {
  show: SkillTypes;
}

const SkillCard = ({ show }: Props): JSX.Element => {
  const [hover, setHover] = useState(false);

  return (
    <ContentCard onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
      {Object.keys(show).length > 0 ? (
        <AnimatePresence mode="wait">
          <Content
            key={show.name}
            variants={contentVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.5, type: "linear" }}
          >
            <Main>
              <Group>
                {show.icon && <show.icon className="duration-300 text-[10rem] mx-auto group-hover:text-teal-400" fill={hover ? show.iconColor : "#637191"} />}
              </Group>
              <Group>
                <Title>{show.name}</Title>
                <SubTitle>Type: {show.type}</SubTitle>
                <SubTitle>Release Date: {show.releaseDate}</SubTitle>
              </Group>
            </Main>
            <ContentDesc>
              <TextDesc>{show.desc}</TextDesc>
            </ContentDesc>
          </Content>
        </AnimatePresence>
      ) : (
        <InitialDesc>Click item for more details</InitialDesc>
      )}
    </ContentCard>
  )
}

const contentVariants = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 30 },
}

export default SkillCard