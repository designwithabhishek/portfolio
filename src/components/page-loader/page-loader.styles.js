import styled, { keyframes, css } from "styled-components";

const moveTopToBottom = keyframes`
0%{
    transform: scaleY(0%);
}
100%{
    transform: scaleY(100%);
}
`;

const moveBottomToUp = keyframes`
0%{
    transform: scaleY(100%);
}
100%{
    transform: scaleY(0%);
}
`;

const topToBottomAnimation = css`
  animation: ${moveTopToBottom} 1s ease-in forwards;
`;

const bottomToUpAnimation = css`
  transform-origin: bottom;
  animation: ${moveBottomToUp} 1s ease-in forwards;
`;
export const PageLoaderWrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  transform-origin: top;
  ${({ loadComplete }) =>
    loadComplete ? bottomToUpAnimation : topToBottomAnimation};
  background-color: #151515;
  color: white;

  @media (max-width: 428px) {
    display: none;
  }
`;

export const Title = styled.h1`
  font-size: clamp(4rem, 7vw, 10rem);
  font-weight: 500;
  opacity: ${({ opacity }) => opacity};
  transition: opacity 250ms ease;
  text-transform: uppercase;
  background: linear-gradient(to right, #4568dc, #b06ab3);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  text-align: center;
`;

export const Content = styled.div`
  transition: opacity 2s ease-in-out;
  opacity: ${({ showContent }) => (showContent ? 1 : 0)};
  @media (max-width: 428px) {
    opacity: 1;
  }
`;
