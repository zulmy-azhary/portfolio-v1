import styled from "styled-components";
import { skills } from "../../helper/data";
import { device } from "../../helper/devices";
import { Card } from "../../styles/SharedComponents";
import { roundedMd } from "../../styles/SharedStyles";
import type { SkillTypes } from "../../types";

const IconCard = styled(Card)`
  ${roundedMd}
  grid-column: span 6 / span 6;
  grid-row: span 1 / span 1;
  height: 9rem;
  cursor: pointer;
  padding: 0 1rem;

  &:hover {
    color: rgb(var(--teal));
  }

  @media ${device.tablet} {
    grid-column: span 3 / span 3;
  }

  @media ${device.laptopL} {
    grid-column: span 2 / span 2;
  }
`;

const IconText = styled.p`
  text-align: center;
  cursor: pointer;
  font-size: 1.125rem;

  @media ${device.laptopL} {
    font-size: 1.25rem;
  }

  @media ${device.desktop} {
    font-size: 1.5rem;
  }
`;

interface Props {
  handler: (e: string) => void;
}

const SkillIcon = ({ handler }: Props): JSX.Element => {
  return (
    <>
      {skills.map(({ id, name }: SkillTypes) => (
        <IconCard onClick={() => handler(name)} key={id}>
          <IconText>{name}</IconText>
        </IconCard>
      ))}
    </>
  )
}

export default SkillIcon