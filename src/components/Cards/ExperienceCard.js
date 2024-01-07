import React from "react";
import AccesSOSLogo from "../../images/AccesSOSLogo.png";
import KeysightLogo from "../../images/KeysightLogo.jpeg";
import {
  Description,
  Card,
  Span,
  Top,
  Image,
  Body,
  Role,
  Company,
  Date,
  Skills,
  ItemWrapper,
  Skill,
} from "../StyledComponents/ExperienceCardStyledComponent";

const ExperienceImage = (experienceImage) => {
  switch (experienceImage) {
    case "Keysight":
      return KeysightLogo;
    case "AccesSOS":
      return AccesSOSLogo;
    default:
      return AccesSOSLogo;
  }
};

const ExperienceCard = ({ experience }) => {
  return (
    <Card>
      <Top>
        <Image src={ExperienceImage(experience.img)} />
        <Body>
          <Role>{experience.role}</Role>
          <Company>{experience.company}</Company>
          <Date>{experience.date}</Date>
        </Body>
      </Top>
      <Description>
        {experience?.desc && <Span>{experience?.desc}</Span>}
        {experience?.skills && (
          <>
            <br />
            <Skills>
              <b>Skills:</b>
              <ItemWrapper>
                {experience?.skills?.map((skill, index) => (
                  <Skill>• {skill}</Skill>
                ))}
              </ItemWrapper>
            </Skills>
          </>
        )}
      </Description>
    </Card>
  );
};

export default ExperienceCard;
