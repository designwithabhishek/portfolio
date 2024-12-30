import React from "react";
import NavBar from "../navbar/navbar.component";
import resumefile from "../../assets/files/resume_2024.pdf";

import {
  HomeContainer,
  Subtitle,
  TextBox,
  TextItemWrapper,
  Title,
  TextItemInner,
  ResumeLinkButton,
} from "./home.styles";

const Home = () => {
  return (
    <HomeContainer id="home">
      <NavBar />
      <TextBox>
        <Title>Hi I am Abhishek</Title>
        <TextItemWrapper>
          <TextItemInner> 
            <Subtitle>I’m a Full Stack Developer passionate about building modern web applications.</Subtitle>
            <Subtitle>I love creating seamless user experiences and scalable systems.</Subtitle>
            <Subtitle>I enjoy solving problems and optimizing performance through clean code.</Subtitle>
          </TextItemInner>
        </TextItemWrapper>
        <ResumeLinkButton href={resumefile} download>
          Resume
        </ResumeLinkButton>
      </TextBox>
    </HomeContainer>
  );
};

export default Home;
