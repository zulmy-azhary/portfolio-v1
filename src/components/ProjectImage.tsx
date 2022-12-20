import { flexCenter } from "@styles/SharedStyles";
import React from "react";
import styled from 'styled-components';
import { ProjectLink } from '@components';

const ImageWrapper = styled.div`
  position: relative;
  grid-area: 1 / 7 / -1 / -1;
  transition-duration: 300ms;

  &:hover {
    transform: translateY(-0.5rem);
  }

  @media (min-width: ${(props) => props.theme.breakpoints.laptopL}) {
    &:hover {
      transform: none;
    }
  }
`;

const Image = styled.img`
  width: 100%;
  height: 15.25rem;
  cursor: pointer;
  user-select: none;
  object-fit: contain;

  @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
    object-fit: cover;
    height: 29.25rem;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.laptop}) {
    height: 27rem;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.laptopL}) {
    height: 20rem;
  }
`;

const ImageCard = styled.div`
  ${flexCenter}
  position: relative;

  &:after {
    content: "";
    position: absolute;
    inset: 0;
    background-color: var(--teal);
    opacity: 0;
    transition: background-color 0.3s, opacity 0.3s, border-radius 0.3s;
  }

  &:hover {
    &:after {
      opacity: 0.5;
    }

    /* Link */
    > div {
      opacity: 1;
    }
  }
`;

const TechWrapper = styled.ul`
  margin: 0.75rem 0 1.25rem;
  display: flex;
  column-gap: 1.125rem;
  row-gap: 0.5rem;
  flex-wrap: wrap;
  width: 100%;
  justify-content: center;

  @media (min-width: ${(props) => props.theme.breakpoints.laptopL}) {
    justify-content: flex-end;
  }
`;

const TechList = styled.li`
  list-style: none;
`;

const TechName = styled.p`
  font-size: 0.875rem;
  font-family: var(--comicNeue);
  color: var(--skyMuted);
  transition: 0.2s ease-in-out;

  &:hover {
    color: var(--teal);
  }
`;

interface Props {
  name: string;
  image: string;
  repo: string;
  liveUrl: string;
  tech: string[];
}

const ProjectImage: React.FC<Props> = (props) => {
  return (
    <ImageWrapper>
      <ImageCard>
        <Image src={props.image} alt={props.name} />
        <ProjectLink name={props.name} repo={props.repo} liveUrl={props.liveUrl} />
      </ImageCard>
      <TechWrapper>
        {props.tech.map((item: string) => (
          <TechList key={item}>
            <TechName>{item}</TechName>
          </TechList>
        ))}
      </TechWrapper>
    </ImageWrapper>
  );
};

export default ProjectImage;
