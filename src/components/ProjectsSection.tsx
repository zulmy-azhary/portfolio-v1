import React from "react";
import styled from "styled-components";
import { AiFillGithub } from "react-icons/ai";
import { BsBoxArrowInUpRight } from "react-icons/bs";
import { Card, Container, Description, Heading, SubHeading, Text } from "@styles/SharedComponents";
import type { Project } from "@types";
import { projects } from "@data";

const Wrapper = styled.ul`
  position: relative;
  display: flex;
  flex-direction: column;
  row-gap: 3rem;
`;

const ContentWrapper = styled.div`
  position: relative;
  z-index: 1;
  grid-area: 1 / 1 / -1 / 7;
  display: none;
  @media (min-width: ${(props) => props.theme.breakpoints.laptopL}) {
    display: block;
  }
`;

const SubHeader = styled.h4`
  color: rgb(var(--blue));
  text-transform: none;
  font-family: var(--comicNeue);
  font-size: 1rem;
  font-weight: 300;
`;

const Header = styled.h2`
  font-weight: 500;
  font-size: 2rem;
`;

const ProjectDescription = styled(Text)`
  transition-duration: 300ms;
  font-size: 0.9rem;
  text-align: justify;
`;

const ProjectCard = styled(Card)`
  flex-direction: column;
  margin-top: 2rem;
  padding: 1rem 2rem;
  min-height: 18.25rem;
  row-gap: 2rem;

  &:hover {
    ${ProjectDescription} {
      color: rgb(var(--teal));
    }
  }
`;

const Link = styled.div`
  align-self: flex-start;
  flex-direction: row-reverse;
  display: flex;
  align-items: center;
  column-gap: 1.5rem;
`;

const Item = styled.a`
  color: rgb(var(--blue));
  font-size: 1.5rem;
  transition-duration: 300ms;
  line-height: 0;

  &:hover * {
    cursor: pointer;
    color: rgb(var(--teal));
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  grid-area: 1 / 7 / -1 / -1;
`;

const Image = styled.img`
  width: 100%;
  max-width: none;
`;

const TechWrapper = styled.ul`
  margin: 0.75rem 0 1.25rem;
  display: flex;
  column-gap: 20px;
  flex-wrap: wrap;
  justify-content: flex-end;
  width: 100%;
`;

const TechList = styled.li`
  list-style: none;
`;

const TechName = styled.p`
  font-family: var(--comicNeue);
  color: rgb(var(--blue) / 0.75);
`;

const List = styled.li`
  position: relative;
  grid-template-columns: repeat(12, minmax(0, 1fr));
  gap: 10px;

  @media (min-width: ${(props) => props.theme.breakpoints.laptopL}) {
    display: grid;
  }

  :nth-child(2n + 1) {
    ${ContentWrapper} {
      grid-column: 7 / -1;
      text-align: right;
    }

    ${ImageWrapper} {
      grid-column: 1 / 7;
    }

    ${Link} {
      flex-direction: row;
      align-self: flex-end;
    }

    ${TechWrapper} {
      width: 85%;
      justify-content: flex-start;
    }
  }
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
            <List key={project.id}>
              <ContentWrapper>
                <SubHeader>Featured Project</SubHeader>
                <Header>{project.name}</Header>
                <ProjectCard>
                  <ProjectDescription>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus quisquam
                    minima odit expedita voluptatum, excepturi, optio nobis eum numquam consectetur
                    commodi nisi quos cumque magni.
                  </ProjectDescription>
                  <Link>
                    <Item
                      href={project.repo}
                      aria-label={project.name}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <AiFillGithub />
                    </Item>
                    <Item
                      href={project.liveUrl}
                      aria-label={project.name}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <BsBoxArrowInUpRight />
                    </Item>
                  </Link>
                </ProjectCard>
              </ContentWrapper>
              <ImageWrapper>
                <Image src={project.image} alt={project.name} />
                <TechWrapper>
                  {project.tech.map((item: string) => (
                    <TechList key={item}>
                      <TechName>{item}</TechName>
                    </TechList>
                  ))}
                </TechWrapper>
              </ImageWrapper>
            </List>
          );
        })}
      </Wrapper>
    </Container>
  );
};

export default Projects;
