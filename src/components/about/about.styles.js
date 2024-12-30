import styled from "styled-components";

export const AboutContainer = styled.section`
  margin: auto;
  position: relative;
  background-color: #151515;
`;

export const AboutWrapper = styled.div`
  margin: auto;
  width: 90%;
  max-width: 120rem;
  padding: 4rem 2rem;
  color: white;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  flex-wrap: wrap;
  gap:2rem;
`;
export const Paragraph = styled.p`
  font-size: 4rem;
  font-weight: 400;
  flex: 1;
  background: linear-gradient(to right, #ddd6f3, #faaca8);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  margin-right: 1rem;

  @media (max-width:428px){
    font-size: 2.5rem;
  }
`;
