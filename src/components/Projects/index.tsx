import { useEffect, useState } from "react";
import type { Key } from "react";
import { Container, Description, Heading, SubHeading } from "../../styles/SharedComponents";
import styled from "styled-components";

interface ProjectsType {
  id: number;
  name: string;
  description: string;
  language: string;
  html_url: string;
}

const GridList = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: repeat(12, minmax(0, 1fr));
  grid-auto-flow: row;
  gap: 3rem 1.5rem;
  padding: 0 1rem;
`;

const Projects = (): JSX.Element => {
  // const [datas, setDatas] = useState([] as Array<ProjectsType>);

  // useEffect(() => {
  //   (async () => {
  //     const res: Response = await fetch("https://api.github.com/users/zulmy-azhary/repos");
  //     const data: Array<ProjectsType> = await res.json();
      
  //     return setDatas(data);
  //   })()
  // }, []);

  return (
    <Container id="projects">
      <SubHeading>Portfolio</SubHeading>
      <Heading>Featured Projects</Heading>
      <Description>Here's something that I've built</Description>
      <GridList>
      </GridList>
    </Container>
  );
};

export default Projects;