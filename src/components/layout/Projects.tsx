import { useEffect, useState } from "react";
import type { Key } from "react";
import { Container, Description, Heading, SubHeading } from "../../styles/SharedStyles";

interface ProjectsType {
  id: number;
  name: string;
  description: string;
  language: string;
  html_url: string;
}

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
      <div className="relative grid grid-cols-12 grid-flow-row gap-x-6 gap-y-12 px-4">
      </div>
    </Container>
  );
};

export default Projects;