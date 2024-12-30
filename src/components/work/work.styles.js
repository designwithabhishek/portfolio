import styled, { css, keyframes } from "styled-components";
import { ReactComponent as ReactSvg } from "../../assets/icons/react.svg";
import { ReactComponent as CSSSvg } from "../../assets/icons/css.svg";
import { ReactComponent as FirebaseSvg } from "../../assets/icons/firebase.svg";
import { ReactComponent as HTML5Svg } from "../../assets/icons/html-5.svg";
import { ReactComponent as NodeJSSvg } from "../../assets/icons/nodejs.svg";
import { ReactComponent as ReduxSvg } from "../../assets/icons/redux.svg";

import { ReactComponent as TSSvg } from "../../assets/icons/ts.svg";

import { ReactComponent as JSSvg } from "../../assets/icons/js.svg";
import { ReactComponent as SassSvg } from "../../assets/icons/sass.svg";
import { ReactComponent as styledComponentSvg } from "../../assets/icons/styled-components.svg";
import {ReactComponent as kafkaSvg} from "../../assets/icons/kafka.svg";
import {ReactComponent as javaSvg} from "../../assets/icons/java.svg";

import {ReactComponent as mongodbSvg} from "../../assets/icons/mongodb.svg";

import {ReactComponent as postgresSvg} from "../../assets/icons/postgresql.svg";

import {ReactComponent as awsSvg} from "../../assets/icons/aws.svg";
import {ReactComponent as SpringBootSvg} from "../../assets/icons/spring-boot.svg";

export const WorkContainer = styled.section`
  background-color: #1d1d1d;
`;

export const WorkWrapper = styled.div`
  margin: auto;
  width: 90%;
  max-width: 120rem;
  padding: 4rem 2rem;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
`;
export const ImageOverlay = styled.div`
  width: 70%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: linear-gradient(to right, #ddd6f3, #faaca8);
  opacity: 0.9;
  transition: transform 400ms ease-in-out;
  transform: translateX(150%);
  pointer-events: none;
  border-radius: 1.2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 3rem;

  @media (max-width: 828px) {
    transform: translateX(0%);
    width: 100%;
    position: static;
    opacity: 1;
  }
`;

export const Image = styled.img`
  max-width: 100%;
  max-height: 100%;
  border-radius: 1.2rem;

  &:hover + ${ImageOverlay} {
    transform: translateX(0%);
  }
`;

export const Title = styled.h2`
  font-size: clamp(6rem, 7vw, 8rem);
  font-weight: 400;
  text-align: center;
  margin-bottom: 4rem;
  background: linear-gradient(to right, #4568dc, #b06ab3);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  margin-bottom: 1rem;
`;

export const Preview = styled.article`
  min-width: 30rem;
  height: 70rem;
  position: relative;
  overflow: hidden;
  flex: 1;
  display: flex;
  justify-content: center;
  @media (max-width: 428px) {
    height: 60rem;
  }
`;

export const PreviewContainer = styled.article`
  display: flex;
  width: 100%;
  gap: 1rem;
  flex-wrap: wrap;
  justify-content: center;
  margin: auto;
  position: relative;
  overflow: hidden;
`;

export const ProjectTitle = styled.div`
  font-size: clamp(3rem, calc(4vw+1rem), 6rem);
  color: #151515;
  font-weight: 500;
  margin-bottom: 1rem;
`;

export const ProjectDescription = styled.p`
  color: #1d1d1d;
`;

export const ProjectContainer = styled.div`
  background: linear-gradient(to right, #4568dc, #b06ab3);
  border-radius: 1.2rem;
  padding: 2rem;
  flex: 1.5;
  min-width: 30rem;
`;

export const rotateAnimation = keyframes`
to{
  transform:rotate(360deg)
}
`;
export const IconStyles = css`
  width: 5rem;
  height: 5rem;

  &:hover {
    transition: transform 250ms ease;
    transform: scale(1.4);
  }

  @media (max-width: 828px) {
    width: 3.5rem;
    height: 3.5rem;
  }
`;
export const ReactIcon = styled(ReactSvg)`
  ${IconStyles}
  animation: ${rotateAnimation} 2s ease-out infinite;
`;

export const CSSIcon = styled(CSSSvg)`
  ${IconStyles}
`;

export const MongoIcon = styled(mongodbSvg)`
  ${IconStyles}
`;

export const KafkaIcon = styled(kafkaSvg)`
  ${IconStyles}
  fill:white;
`;

export const JavaIcon = styled(javaSvg)`
  ${IconStyles}
`;

export const PostgresIcon = styled(postgresSvg)`
  ${IconStyles}
`;

export const HTMLIcon = styled(HTML5Svg)`
  ${IconStyles}
`;

export const NodeJSIcon = styled(NodeJSSvg)`
  ${IconStyles}
`;

export const FireBaseIcon = styled(FirebaseSvg)`
  ${IconStyles}
`;

export const ReduxIcon = styled(ReduxSvg)`
  ${IconStyles}
`;

export const CSSInJSIcon = styled(styledComponentSvg)`
  ${IconStyles}
`;

export const JSIcon = styled(JSSvg)`
  ${IconStyles}
`;

export const TSIcon = styled(TSSvg)`
  ${IconStyles}
`;

export const SassIcon = styled(SassSvg)`
  ${IconStyles}
`;

export const SpringBootIcon = styled(SpringBootSvg)`
  ${IconStyles}
`;


export const AWSIcon = styled(awsSvg)`
  ${IconStyles};
  fill: aliceblue;
`;

export const ProjectSkills = styled.div`
  display: flex;
  gap: 2rem;
  padding: 2rem;
  flex-wrap: wrap;
`;
