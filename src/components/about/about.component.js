import React from "react";
import Timeline from "../timeline/timeline.component";
import { AboutContainer, AboutWrapper, Paragraph } from "./about.styles";

const About = () => {
  return (
    <AboutContainer id="about">
      <AboutWrapper>
        <Paragraph>
        I am a Fullstack Developer with a strong focus on creating applications that blend appealing UI/UX design, high performance, and customizability. 
        </Paragraph>
        <Paragraph>
        At Fynd, I contributed to optimizing catalog management software by implementing image optimization, code-splitting, and real-time data migration pipelines. My experience also spans backend development, including batch processing with Kafka, PostgreSQL, and scalable data synchronization systems.
        </Paragraph>
        <Timeline />
      </AboutWrapper>
    </AboutContainer>
  );
};

export default About;
