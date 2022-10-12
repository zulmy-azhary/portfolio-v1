import React from "react";
import {
  Card,
  Container,
  Description,
  Heading,
  SubHeading,
  Text,
} from "../../styles/SharedComponents";
import styled from "styled-components";
import { projects } from "../../helper/data/projects";
import type { ProjectTypes } from "../../types";
import { AiFillGithub } from "react-icons/ai";
import { BsBoxArrowInUpRight } from "react-icons/bs";
import { device } from "../../helper/devices";

const Wrapper = styled.ul`
  position: relative;
  display: flex;
  flex-direction: column;
`;

const ContentWrapper = styled.div`
  position: relative;
  z-index: 1;
  grid-area: 1 / 1 / -1 / 7;
  display: none;
  @media ${device.laptopL} {
    display: block;
  }
`;

const SubHeader = styled(SubHeading)`
  text-transform: none;
  font-family: "Comic Neue";
  font-size: 1rem;
`;

const Header = styled.h1`
  font-weight: 500;
  font-size: 2.25rem;
`;

const ProjectCard = styled(Card)`
  flex-direction: column;
  margin-top: 2.5rem;
  padding: 1rem 2rem;
  min-height: 18.25rem;
  row-gap: 1rem;
`;

const ProjectDescription = styled(Text)`
  font-size: 0.9rem;
  text-align: justify;
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

  :hover {
    cursor: pointer;
    color: rgb(var(--teal));
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  grid-area: 1 / 6 / -1 / -1;
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
  font-family: "Comic Neue";
  color: rgb(var(--blue) / 0.75);
`;

const List = styled.li`
  position: relative;
  align-items: flex-end;
  grid-template-columns: repeat(12, minmax(0, 1fr));
  gap: 10px;
  padding: 3.125rem 3rem;

  @media ${device.laptopL} {
    display: grid;
  }

  :nth-child(2n + 1) {
    ${ContentWrapper} {
      grid-column: 7 / -1;
      text-align: right;
    }

    ${ImageWrapper} {
      grid-column: 1 / 8;
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
        {projects.map((project: ProjectTypes): JSX.Element => {
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
                <Image src={project.image} />
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
