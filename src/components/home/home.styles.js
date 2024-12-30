import styled, { css, keyframes } from "styled-components";

export const typingTextAnimation = keyframes`
to{
    left:100%
}
`;

export const moveUpAnimation = keyframes`
0%{
    transform: translateY(0%);
}

100%{
    transform: translateY(-100%);
}

`;

export const gradient = keyframes`
0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}
`;

export const Title = styled.h1`
  font-size: clamp(4rem, 7vw, 10rem);
  color: #151515;
  font-weight: 400;
  background: linear-gradient(to right, #4568dc, #b06ab3);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
`;

export const Subtitle = styled.h2`
  font-size: clamp(2rem, calc(4vw+1rem), 4rem);
  color: #151515;
  font-weight: 300;
  text-align: center;
  /* height:3.5rem; */
  margin: 1.5rem;
`;

export const HomeContainer = styled.section`
  width: 100%;
  max-width: 120rem;
  min-height: 100vh;
  margin: auto;
  position: relative;
  overflow-x: hidden;
  padding: 0 4rem;

  @media (max-width: 428px) {
    padding: 0 2rem;
  }
`;

export const TextBox = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: max-content;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TextItemWrapper = styled.div`
  height: 3.5rem;
  overflow-y: hidden;
`;

export const TextItemInner = styled.div`
  width: 100%;
  animation: ${moveUpAnimation} 8s linear infinite backwards;
  transform-origin: bottom;
  &:hover {
    animation-play-state: paused;
  }
`;

export const ResumeLinkButton = styled.a`
  display: inline-block;
  border-color: 1px solid #1f1f1f;
  text-decoration: none;
  padding: 1.2rem 2.5rem;
  text-align: center;

  margin-top: 2rem;
  border: 2px solid #1f1f1f;
  border-radius: 1.2rem;

  background: linear-gradient(to right, #4568dc, #b06ab3);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;

  &:hover {
    background-color: white;
    color: #1f1f1f;
  }
`;
export const ResumeWrapper = styled.div`
  background: linear-gradient(to right, #4568dc, #b06ab3);
  padding: 0.5rem;
  display: inline-block;
  margin-top: 2rem;
`;
