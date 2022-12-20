import { Text } from "@styles/SharedComponents";
import { flexCenter } from "@styles/SharedStyles";
import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { GiEyeTarget } from "react-icons/gi";
import styled from "styled-components";

const Link = styled.div`
  position: absolute;
  display: flex;
  column-gap: 1rem;
  opacity: 0;
  transition: opacity 0.5s;
  z-index: 1;

  @media (min-width: ${(props) => props.theme.breakpoints.laptopL}) {
    flex-direction: row-reverse;
  }

  &:hover {
    opacity: 1;
  }
`;

const Item = styled.a`
  ${flexCenter}
  column-gap: 0.35rem;
  color: var(--sky);
  border-radius: 5px;
  line-height: 0;
  background-color: var(--primary);
  padding: 0.25rem;
  flex: 1;
  flex-wrap: wrap;
  width: 6.5rem;

  &:hover > * {
    transition: color 0.3s;
    color: var(--teal);
  }
`;

const ItemText = styled(Text)`
  font-size: 0.7rem;
  color: var(--sky);
`;

interface Props {
  name: string;
  repo: string;
  liveUrl: string;
}

const ProjectLink: React.FC<Props> = ({ name, repo, liveUrl }) => {
  return (
    <Link>
      <Item href={repo} aria-label={name} target="_blank" rel="noreferrer">
        <AiFillGithub />
        <ItemText>Repository</ItemText>
      </Item>
      <Item href={liveUrl} aria-label={name} target="_blank" rel="noreferrer">
        <GiEyeTarget />
        <ItemText>Live Site</ItemText>
      </Item>
    </Link>
  );
};

export default ProjectLink;
