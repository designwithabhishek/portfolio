import styled from "styled-components";
import { ReactComponent as TcsLogo } from "../../assets/icons/Tata_Consultancy_Services_Logo.svg";
import VectoScalarLogo from "../../assets/icons/vectoscalar-logo.png";
import FyndLogo from "../../assets/icons/fynd-logo.png"
export const TimelineArea = styled.section`
  min-width: 30rem;
  border-left: 2px solid white;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  margin-top: 3rem;
  flex: 1;

  @media (max-width: 428px) {
    border-left: unset;
  }
`;

export const TimeLineCard = styled.article`
  width: auto;
  margin-left: 7%;
  border-radius: 1.2rem;
  background-color: #1d1d1d;
  padding: 2rem 3rem;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: calc(-7% - 1.8rem);
    width: 2rem;
    height: 2rem;
    background-color: #1d1d1d;
    border: 1px solid white;
    border-radius: 50%;
    @media (max-width: 428px) {
      display: none;
    }
  }

  @media (max-width: 428px) {
    margin-left: unset;
  }
`;

export const TimeLineTitle = styled.h2`
  font-size: 3rem;
  font-weight: 400;
  background: linear-gradient(to right, #4568dc, #b06ab3);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  margin-bottom: 1rem;
`;

export const TimelineContent = styled.ul`
  font-weight: 300;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const TimelineContentItem = styled.li``;
export const TimeLineTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const TimeLineDate = styled.span`
  margin-left: 7%;
  font-weight: 400;
  font-size: 1.6rem;
`;

export const TCSLogo = styled(TcsLogo)`
  height: 5rem;
`;

export const VectoLogo = styled.img.attrs({
  src: VectoScalarLogo,
})`
  width: 5rem;
  height: 5rem;
  object-fit: contain;
`;


export const FyndIconLogo = styled.img.attrs({
  src: FyndLogo,
})`
  width: 8rem;
  height: 8rem;
  object-fit: contain;
`;