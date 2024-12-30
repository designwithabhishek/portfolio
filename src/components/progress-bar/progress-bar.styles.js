import styled from "styled-components";

export const ProgressBarOuter = styled.div`
  width: 100%;
  height: 2rem;
  background-color: #1d1d1d;
  border-radius: 10rem;
  overflow: hidden;
`;

export const ProgressBarInner = styled.div`
  width: ${({ progress }) => progress};
  height: 100%;
  transition: 250ms ease-in-out;
  background: linear-gradient(to right, #4568dc, #b06ab3);
  border-radius: 10rem;
`;
