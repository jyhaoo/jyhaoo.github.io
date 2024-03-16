import React from "react";
import { Modal } from "@mui/material";
import { CloseRounded } from "@mui/icons-material";
import text911infoMap from "../../images/text911infoMap.png";
import Budget from "../../images/Budget.png";
import {
  Container,
  Wrapper,
  Image,
  Title,
  Date,
  Tags,
  Tag,
  Desc,
  ButtonContainer,
  Button,
} from "./ProjectDetailsStyledComponent";

const ProjectImage = (image) => {
  switch (image) {
    case "text911infoMap":
      return text911infoMap;
    case "Budget":
      return Budget;
    default:
      return text911infoMap;
  }
};

const ProjectDetails = ({ openModal, setOpenModal }) => {
  const project = openModal.project;
  return (
    <Modal
      open={true}
      onClose={() => setOpenModal({ state: false, project: null })}
    >
      <Container>
        <Wrapper>
          <CloseRounded
            onClick={() => setOpenModal({ state: false, project: null })}
            style={{
              position: "absolute",
              top: "10px",
              right: " 20px",
              cursor: "pointer",
            }}
          />
          <Image src={ProjectImage(project.image)} />
          <Title>{project.title}</Title>
          <Date>{project.date}</Date>
          <Tags>
            {project.tags.map((tag) => (
              <Tag>{tag}</Tag>
            ))}
          </Tags>
          <Desc>{project.description}</Desc>
          <ButtonContainer>
            <Button href={project.github} target="new">
              View Code
            </Button>
            <Button href={project.webapp} target="new">
              View Live App
            </Button>
          </ButtonContainer>
        </Wrapper>
      </Container>
    </Modal>
  );
};

export default ProjectDetails;
