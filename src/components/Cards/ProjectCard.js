import React from "react";
import text911infoMap from "../../images/text911infoMap.png";
import {
  Card,
  Image,
  Tags,
  Tag,
  Details,
  Title,
  Date,
  Description,
} from "./ProjectCardStyledComponent";

const ProjectImage = (image) => {
  switch (image) {
    case "text911infoMap":
      return text911infoMap;
    default:
      return text911infoMap;
  }
};

const ProjectCards = ({ project }) => {
  return (
    <Card>
      <Image src={ProjectImage(project.image)} />
      <Tags>
        {project.tags?.map((tag, index) => (
          <Tag>{tag}</Tag>
        ))}
      </Tags>
      <Details>
        <Title>{project.title}</Title>
        <Date>{project.date}</Date>
        <Description>{project.description}</Description>
      </Details>
    </Card>
  );
};

export default ProjectCards;
