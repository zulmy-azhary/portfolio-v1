import { Card, Text } from "@styles/SharedComponents";
import type { Project } from "@types";
import { motion } from "framer-motion";
import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { BsBoxArrowInUpRight } from "react-icons/bs";
import styled from "styled-components";

const ContentWrapper = styled.div`
  position: relative;
  z-index: 1;
  grid-area: 1 / 1 / -1 / 7;
  display: none;

  @media (min-width: ${(props) => props.theme.breakpoints.laptopL}) {
    display: block;
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  grid-area: 1 / 7 / -1 / -1;
`;

const Link = styled.div`
  align-self: flex-start;
  flex-direction: row-reverse;
  display: flex;
  align-items: center;
  column-gap: 1.5rem;
`;

const TechWrapper = styled.ul`
  margin: 0.75rem 0 1.25rem;
  display: flex;
  column-gap: 1.125rem;
  row-gap: 0.5rem;
  flex-wrap: wrap;
  justify-content: flex-end;
  width: 100%;
`;

const List = styled(motion.li)`
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
      justify-content: flex-start;
    }
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
  font-size: 1.875rem;
`;

const ProjectDescription = styled(Text)`
  color: rgb(var(--blue) / 0.75);
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
      color: var(--teal);
    }
  }
`;

const Item = styled.a`
  color: rgb(var(--blue));
  font-size: 1.5rem;
  transition-duration: 300ms;
  line-height: 0;

  &:hover * {
    cursor: pointer;
    color: var(--teal);
  }
`;

const Image = styled.img`
  width: 100%;
  max-width: none;
`;

const TechList = styled.li`
  list-style: none;
`;

const TechName = styled.p`
  font-size: 0.875rem;
  font-family: var(--comicNeue);
  color: rgb(var(--blue) / 0.75);
  transition: 0.2s ease-in-out;

  &:hover {
    color: var(--teal);
  }
`;

interface Props {
  project: Project;
}

const ProjectItem: React.FC<Props> = ({ project }) => {
  return (
    <List
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ ease: "easeInOut", duration: 0.6 }}
      viewport={{ once: true, margin: "-350px" }}
    >
      <ContentWrapper>
        <SubHeader>Featured Project</SubHeader>
        <Header>{project.name}</Header>
        <ProjectCard>
          <ProjectDescription>
            {project.description ??
              "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus quisquam minima odit expedita voluptatum, excepturi, optio nobis eum numquam consectetur commodi nisi quos cumque magni."}
          </ProjectDescription>
          <Link>
            <Item href={project.repo} aria-label={project.name} target="_blank" rel="noreferrer">
              <AiFillGithub />
            </Item>
            <Item href={project.liveUrl} aria-label={project.name} target="_blank" rel="noreferrer">
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
};

export default ProjectItem;
