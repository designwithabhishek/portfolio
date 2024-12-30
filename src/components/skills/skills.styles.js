import styled from "styled-components";

export const SkillsContainer = styled.section`
  background-color: #151515;
`;

export const SkillsWrapper = styled.div`
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

export const Title = styled.h1`
  font-size: 6rem;
  font-weight: 400;
  background: linear-gradient(to right, #4568dc, #b06ab3);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
`;

export const SkillsIntro = styled.p``;
export const SkillList = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap:1rem;
`;
export const SkillTitle = styled.h2`
  font-weight: 400;
  font-size: 3rem;
  min-width: 20%;

  @media (max-width: 828px) {
    display: none;
  }
`;
export const SkillItem = styled.li`
  list-style: none;
  display: flex;
  gap: 2rem;
  align-items: center;
`;
