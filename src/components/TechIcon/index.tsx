import styled from "styled-components";
import { teches } from "../../helper/data";
import { device } from "../../helper/devices";
import { Card } from "../../styles/SharedComponents";
import { roundedMd } from "../../styles/SharedStyles";
import type { TechTypes } from "../../types";

const IconCard = styled(Card)`
  grid-column: span 6 / span 6;
  grid-row: span 1 / span 1;
  height: 7.5rem;
  cursor: pointer;
  padding: 0;
  
  &:hover {
    ${roundedMd}
    color: rgb(var(--teal));
  }
  
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
  }

  @media ${device.laptop} {
    grid-column: span 4 / span 4;
  }

  @media ${device.laptopL} {
    grid-column: span 2 / span 2;
  }
`;

interface Props {
  handler: (e: string) => void;
}

const SkillIcon = ({ handler }: Props): JSX.Element => {
  return (
    <>
      {teches.map(({id, name, Icon}: TechTypes) => (
        <IconCard onClick={() => handler(name)} key={id}>
          <Icon />
        </IconCard>
      ))}
    </>
  )
}

export default SkillIcon