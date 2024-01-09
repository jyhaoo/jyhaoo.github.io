import React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import { education } from "../../data/constants";
import EducationCard from "../Cards/EducationCard";
import {
  Container,
  Wrapper,
  Title,
  Desc,
  TimelineSection,
} from "./EducationStyledComponent";

const Education = () => {
  return (
    <Container id="education">
      <Wrapper>
        <Title>Education</Title>
        <Desc>My education history</Desc>
        <TimelineSection>
          <Timeline>
            {education.map((educationExperience, index) => (
              <TimelineItem>
                <TimelineContent sx={{ py: "12px, px2" }}>
                  <EducationCard education={educationExperience} />
                </TimelineContent>
                <TimelineSeparator>
                  <TimelineDot variant="outlined" color="primary" />
                  {index !== 1 && (
                    <TimelineConnector style={{ background: "#45A29E" }} />
                  )}
                </TimelineSeparator>
              </TimelineItem>
            ))}
          </Timeline>
        </TimelineSection>
      </Wrapper>
    </Container>
  );
};

export default Education;
