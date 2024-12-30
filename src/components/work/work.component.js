import React from "react";
import ecommerceSmall from "../../assets/images/ecommerce-1.webp";
import ecommerceLarge from "../../assets/images/ecommerce-1-1.webp";
import twitter1 from "../../assets/images/twitter-4.webp";
import meals1 from "../../assets/images/meals-1.webp";
import meals2 from "../../assets/images/meals-2.webp";

import {
  WorkContainer,
  WorkWrapper,
  Image,
  Title,
  Preview,
  PreviewContainer,
  ImageOverlay,
  ProjectTitle,
  ProjectDescription,
  ProjectContainer,
  ProjectSkills,
  ReactIcon,
  CSSIcon,
  HTMLIcon,
  JSIcon,
  TSIcon,
  FireBaseIcon,
  ReduxIcon,
  CSSInJSIcon,
  SassIcon,
  NodeJSIcon,
} from "./work.styles";

const Work = () => {
  return (
    <>
      <WorkContainer id="work">
        <WorkWrapper>
          <Title> My Work </Title>
          <PreviewContainer>
            <Image
              src={ecommerceLarge}
              srcSet={`${ecommerceSmall} 500w, ${ecommerceLarge} 1000w`}
              alt="ecommerce project screenshot 1"
              loading="lazy"
            />
            <ImageOverlay>
              <ProjectTitle>CrownShop</ProjectTitle>
              <ProjectDescription>
                Build an online platform with Firebase Authentication that
                allows user to customize their cart and buy products. Tech:
                React, Redux, Styled-components, Typescript, CSS, HTML,
                Javascript, Firebase
              </ProjectDescription>
              <ProjectSkills>
                <ReactIcon />
                <ReduxIcon />
                <JSIcon />
                <TSIcon />
                <CSSInJSIcon />
                <CSSIcon />
                <HTMLIcon />
                <FireBaseIcon />
              </ProjectSkills>
            </ImageOverlay>
          </PreviewContainer>
          <PreviewContainer>
            <Image
              src={twitter1}
              alt="twitter clone project screenshot 1"
              loading="lazy"
            />
            <ImageOverlay>
              <ProjectTitle>Twitter clone</ProjectTitle>
              <ProjectDescription>
                Developed a social network portal like twitter with JWT
                Authentication and full support of Authorization where user can
                add, delete and view tweets of followed people .Tech: React,
                Redux, NodeJS, Express, CSS, HTML
              </ProjectDescription>
              <ProjectSkills>
                <ReactIcon />
                <ReduxIcon />
                <JSIcon />
                <SassIcon />
                <NodeJSIcon />
                <CSSIcon />
                <HTMLIcon />
              </ProjectSkills>
            </ImageOverlay>
          </PreviewContainer>
          <PreviewContainer>
            <Preview>
              <Image
                src={meals1}
                alt="MealsToGo cross-platform app project screenshot 1"
                loading="lazy"
              />
            </Preview>
            <Preview>
              <Image
                src={meals2}
                alt="MealsToGo cross-platform app project screenshot 2"
                loading="lazy"
              />
            </Preview>

            <ProjectContainer>
              <ProjectTitle>MealsToGo</ProjectTitle>
              <ProjectDescription>
                Developed a Food App like Uber Eats which allows user to search,
                view and favourite their food items with map integration and
                Firebase google Authentication. Tech: React-native,
                Styled-components, Javascript, FireBase.
              </ProjectDescription>
              <ProjectSkills>
                <ReactIcon />
                <JSIcon />
                <CSSInJSIcon />
                <CSSIcon />
                <HTMLIcon />
                <FireBaseIcon />
              </ProjectSkills>
            </ProjectContainer>
          </PreviewContainer>
        </WorkWrapper>
      </WorkContainer>
    </>
  );
};

export default Work;
