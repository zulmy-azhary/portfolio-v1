import { Card, Text } from "@styles/SharedComponents";
import React from "react";
import styled from "styled-components";

const ContentWrapper = styled.div`
  position: relative;
  z-index: 1;
  grid-area: 1 / 1 / -1 / 7;
  text-align: left;
`;

const SubHeader = styled.h4`
  color: var(--sky);
  text-transform: none;
  font-family: var(--comicNeue);
  font-weight: 300;
  font-size: 0.75rem;

  @media (min-width: ${(props) => props.theme.breakpoints.laptop}) {
    font-size: 0.9rem;
  }
`;

const Header = styled.h2`
  font-weight: 500;
  font-size: 1.25rem;

  @media (min-width: ${(props) => props.theme.breakpoints.laptop}) {
    font-size: 1.6rem;
  }
`;

const ProjectDescription = styled(Text)`
  color: var(--skyMuted);
  transition-duration: 300ms;
  font-size: 0.8rem;
  text-align: justify;
`;

const ProjectCard = styled(Card)`
  flex-direction: column;
  margin-top: 2rem;
  padding: 1.5rem;
  min-height: 18.25rem;
  row-gap: 2rem;
  justify-content: flex-start;
  display: none;

  @media (min-width: ${(props) => props.theme.breakpoints.laptopL}) {
    display: flex;
  }

  &:hover {
    ${ProjectDescription} {
      color: var(--teal);
    }
  }
`;

interface Props {
  name: string;
  description?: string;
}

const ProjectContent: React.FC<Props> = ({ name, description }) => {
  return (
    <ContentWrapper>
      <SubHeader>Featured Project</SubHeader>
      <Header>{name}</Header>
      <ProjectCard>
        <ProjectDescription>{description ?? defaultDesc}</ProjectDescription>
      </ProjectCard>
    </ContentWrapper>
  );
};

const defaultDesc =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae quo sunt tenetur quaerat distinctio repellendus recusandae possimus molestias aliquam dicta voluptatem maxime eos earum quas odit repellat, itaque, accusamus eaque ducimus, esse aspernatur. Recusandae, a sed hic officiis cumque voluptatem nam cupiditate placeat autem. Nisi vel quaerat voluptates reprehenderit dicta?";

export default ProjectContent;
