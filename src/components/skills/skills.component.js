import React from "react";
import ProgressBar from "../progress-bar/progress-bar.component";
import {
  ReactIcon,
  JSIcon,
  CSSIcon,
  CSSInJSIcon,
  NodeJSIcon,
  HTMLIcon,
  TSIcon,
  ReduxIcon,
  FireBaseIcon,
  JavaIcon,
  PostgresIcon,
  KafkaIcon,
  MongoIcon,
  AWSIcon,
  SpringBootIcon,
} from "../work/work.styles";
import {
  SkillsContainer,
  SkillsIntro,
  SkillsWrapper,
  Title,
  SkillList,
  SkillItem,
  SkillTitle,
} from "./skills.styles";

const Skills = () => {
  return (
    <SkillsContainer id="skills">
      <SkillsWrapper>
        <Title>My Skills</Title>
        <SkillsIntro>Here are some of my key skills</SkillsIntro>
        <SkillList>
          <SkillItem>
            <ReactIcon />
            <SkillTitle>React</SkillTitle>
            <ProgressBar max={5} value={4} />
          </SkillItem>
          <SkillItem>
            <ReduxIcon />
            <SkillTitle>Redux</SkillTitle>
            <ProgressBar max={5} value={4} />
          </SkillItem>
          <SkillItem>
            <JSIcon />
            <SkillTitle>Javascript</SkillTitle>
            <ProgressBar max={5} value={5} />
          </SkillItem>
          <SkillItem>
            <TSIcon />
            <SkillTitle>Typescript</SkillTitle>
            <ProgressBar max={5} value={4} />
          </SkillItem>
          <SkillItem>
            <HTMLIcon />
            <SkillTitle>HTML</SkillTitle>
            <ProgressBar max={5} value={4} />
          </SkillItem>
          <SkillItem>
            <CSSIcon />
            <SkillTitle>CSS</SkillTitle>
            <ProgressBar max={5} value={4} />
          </SkillItem>
          <SkillItem>
            <FireBaseIcon />
            <SkillTitle>FireBase</SkillTitle>
            <ProgressBar max={5} value={3} />
          </SkillItem>
          <SkillItem>
            <NodeJSIcon />
            <SkillTitle>NodeJS</SkillTitle>
            <ProgressBar max={5} value={4} />
          </SkillItem>
          <SkillItem>
            <ReactIcon />
            <SkillTitle>React Native</SkillTitle>
            <ProgressBar max={5} value={3} />
          </SkillItem>
          <SkillItem>
            <JavaIcon />
            <SkillTitle>Java</SkillTitle>
            <ProgressBar max={5} value={3} />
          </SkillItem>
          <SkillItem>
          <SpringBootIcon />
          <SkillTitle>Spring Boot</SkillTitle>
          <ProgressBar max={5} value={3} />
        </SkillItem>
          <SkillItem>
            <PostgresIcon />
            <SkillTitle>Postgres</SkillTitle>
            <ProgressBar max={5} value={4} />
          </SkillItem>
          <SkillItem>
            <KafkaIcon />
            <SkillTitle>Kafka</SkillTitle>
            <ProgressBar max={5} value={4} />
          </SkillItem>
          <SkillItem>
            <MongoIcon />
            <SkillTitle>Mongo</SkillTitle>
            <ProgressBar max={5} value={3} />
          </SkillItem>
          <SkillItem>
            <AWSIcon />
            <SkillTitle>AWS</SkillTitle>
            <ProgressBar max={5} value={3} />
          </SkillItem>
        </SkillList>
      </SkillsWrapper>
    </SkillsContainer>
  );
};

export default Skills;
