import styled, { css } from "styled-components";
import { ReactComponent as LinkedIn } from "../../assets/icons/linkedin.svg";
import { ReactComponent as Mail } from "../../assets/icons/mail.svg";
import { ReactComponent as Call } from "../../assets/icons/call.svg";

export const ContactContainer = styled.section`
  background: linear-gradient(to right, #ddd6f3, #faaca8);
  padding: 5rem 0;
`;
export const ContactWrapper = styled.div`
  width: 90%;
  max-width: 120rem;
  padding: 3rem;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  border-radius: 1.2rem;
  background-color: #151515;
  box-shadow: 0 0 1.5rem 0 rgba(0, 0, 0, 0.25);
  color: white;
  @media (max-width: 496px) {
    padding: 2rem;
    flex-direction: column;
  }
`;

export const ContactLeft = styled.div`
  flex: 1;
`;

export const ContactRight = styled.div`
  flex: 1;
  padding: 3rem 1.5rem 3rem 3rem;
  @media (max-width: 496px) {
    padding: 0;
  }
`;

export const ContactTitle = styled.h1`
  font-size: clamp(4rem, calc(7vw+1rem), 10rem);
  background: linear-gradient(to right, #4568dc, #b06ab3);
  font-weight: 500;
  margin-bottom: 2rem;
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
`;
export const ContactSubTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 400;
  color: #ddd;
  @media (max-width: 428px) {
    font-size: 2rem;
  }
`;

export const ContactList = styled.ul`
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const ContactListItem = styled.li`
  display: flex;
  gap: 2rem;
  align-items: center;

  @media (max-width: 496px) {
    gap: 1rem;
  }
`;

export const IconStyles = css`
  width: 3rem;
  height: 3rem;
  color: white;
  fill: white;
`;

export const MailIcon = styled(Mail)`
  ${IconStyles}
`;

export const CallIcon = styled(Call)`
  ${IconStyles}
`;

export const LinkedInIcon = styled(LinkedIn)`
  ${IconStyles}
`;

export const Image = styled.img`
  height: 60rem;
  width: 100%;
  object-fit: cover;
  border-radius: 1.2rem;
  @media (max-width: 428px) {
    display: none;
  }
`;

export const ContactLink = styled.a`
  text-decoration: none;
  color: #151515;
  overflow-wrap: anywhere;
  color: #ddd;
`;

export const ContactNumber = styled.span`
  font-size: 1.6rem;
  color: #ddd;
`;
