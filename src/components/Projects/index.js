import React from "react";
import ProjectCard from "../Cards/ProjectCard";
import { projects } from "../../data/constants";
import {
  Container,
  Wrapper,
  Title,
  Desc,
  CardContainer,
} from "./ProjectsStyledComponents";

const Projects = () => {
  return (
    <Container id="projects">
      <Wrapper>
        <Title>Projects</Title>
        <Desc>Here is the collection of projects that I've worked on.</Desc>
        <CardContainer>
          {projects.map((project) => (
            <ProjectCard project={project} key={project.id} />
          ))}
        </CardContainer>
      </Wrapper>
    </Container>
  );
};

export default Projects;
