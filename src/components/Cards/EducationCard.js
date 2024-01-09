import React from "react";
import UsfcaLogo from "../../images/UsfcaLogo.jpeg";
import BerkeleyLogo from "../../images/BerkeleyLogo.png";
import {
  Card,
  Top,
  Image,
  Body,
  Name,
  Degree,
  Date,
  Grade,
} from "./EducationCardStyledComponent";

const EducationImage = (educationImage) => {
  switch (educationImage) {
    case "UsfcaLogo":
      return UsfcaLogo;
    case "BerkeleyLogo":
      return BerkeleyLogo;
    default:
      return UsfcaLogo;
  }
};

const EducationCard = ({ education }) => {
  return (
    <Card>
      <Top>
        <Image src={EducationImage(education.img)} alt="Usfca Logo" />
        <Body>
          <Name>{education.school}</Name>
          <Degree>{education.degree}</Degree>
          <Date>{education.date}</Date>
        </Body>
      </Top>
      <Grade>
        <b>Grade: </b>
        {education.grade}
      </Grade>
    </Card>
  );
};

export default EducationCard;
