import React from "react";
import styled from "styled-components";
import { Container, Description, Heading, SubHeading } from "@styles/SharedComponents";
import type { Project } from "@types";
import { projects } from "@data";
import { ProjectItem } from "@components";

const Wrapper = styled.ul`
  position: relative;
  display: flex;
  flex-direction: column;
  row-gap: 3rem;
  padding-top: 1.5rem;
`;

const Projects: React.FC = () => {
  return (
    <Container id="projects">
      <SubHeading>Portfolio</SubHeading>
      <Heading>Featured Projects</Heading>
      <Description>Here's something that I've built</Description>
      <Wrapper>
        {projects.map((project: Project) => {
          return (
            <ProjectItem key={project.id} project={project} />
          );
        })}
      </Wrapper>
    </Container>
  );
};

export default Projects;
