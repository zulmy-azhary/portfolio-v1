import React, { useState } from "react";
import styled from 'styled-components';
import { teches } from "../../helper/data/teches";
import { Card } from "../../styles/SharedComponents";
import { roundedMd } from "../../styles/SharedStyles";
import { TechTypes } from "../../types";

const Container = styled.div`
  width: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const Slider = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  width: 100%;
  height: 350px;
  overflow: hidden;
`;

const Item = styled(Card)`
  cursor: pointer;
  padding: 0;

  &:hover {
    ${roundedMd}
    color: rgb(var(--teal));
  }

  /* The icons */
  svg {
    scale: 0.5;
  }
  &:hover * {
    cursor: pointer;
  }
`;

interface Props {
  handler: (e: string) => void;
}

const Carousel: React.FC<Props> = ({ handler }) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const halfwayIndex = Math.ceil(teches.length / 2);
  const itemHeight = 24;
  const shuffleThreshold = halfwayIndex * itemHeight;
  const visibleStyleThreshold = shuffleThreshold / 2;

  const determinePlacement = (itemIndex: number): number | undefined => {
    if (activeIndex === itemIndex) return 0;

    if (itemIndex >= halfwayIndex) {
      if (activeIndex > itemIndex - halfwayIndex) {
        return (itemIndex - activeIndex) * itemHeight;
      } else {
        return -(teches.length + activeIndex - itemIndex) * itemHeight;
      }
    }

    if (itemIndex > activeIndex) {
      return (itemIndex - activeIndex) * itemHeight;
    }

    if (itemIndex < activeIndex) {
      if ((activeIndex - itemIndex) * itemHeight >= shuffleThreshold) {
        return (teches.length - (activeIndex - itemIndex)) * itemHeight;
      }
      return -(activeIndex - itemIndex) * itemHeight;
    }
  };

  const handleClick = (direction: string) => {
    setActiveIndex((prevIndex) => {
      if (direction === "next") {
        if (prevIndex + 1 > teches.length - 1) {
          return 0;
        }
        return prevIndex + 1;
      }

      if (prevIndex - 1 < 0) {
        return teches.length - 1;
      }

      return prevIndex - 1;
    });
  };

  return (
    <Container>
    <button onClick={() => handleClick("prev")}>Prev</button>
      <Slider>
        {teches.map(({ id, name, Icon }: TechTypes, idx: number) => (
          <Item onClick={() => setActiveIndex(idx)} key={id} style={{
            transform: `translateY(${determinePlacement(idx)}px)`
          }}>
            <Icon />
          </Item>
        ))}
      </Slider>
      <button onClick={() => handleClick("next")}>Next</button>
    </Container>
  );
};

export default Carousel;
