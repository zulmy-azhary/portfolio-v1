import type { Project } from "@types";
import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";
import { defaultTransition } from "../styles/motionVariants";
import { ProjectContent, ProjectImage } from "@components";

const List = styled(motion.li)`
  position: relative;
  grid-template-columns: repeat(12, minmax(0, 1fr));
  gap: 10px;
  display: flex;
  flex-direction: column;

  @media (min-width: ${(props) => props.theme.breakpoints.laptopL}) {
    display: grid;
  }

  &:nth-child(2n + 1) {
    /* Content */
    div:first-child {
      grid-column: 7 / -1;
      text-align: right;
    }

    /* Image */
    div:last-child {
      grid-column: 1 / 7;

      /* Project Link */
      > div > div {
        flex-direction: row;
      }

      /* Tech Item */
      ul {
        @media (min-width: ${(props) => props.theme.breakpoints.laptopL}) {
          justify-content: flex-start;
        }
      }
    }
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
      transition={defaultTransition}
      viewport={{ once: true, margin: "-150px" }}
    >
      <ProjectContent name={project.name} description={project.description} />
      <ProjectImage {...project} />
    </List>
  );
};

export default ProjectItem;
