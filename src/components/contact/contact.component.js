import React from "react";
import {
  ContactContainer,
  ContactLeft,
  ContactWrapper,
  ContactRight,
  Image,
  ContactTitle,
  ContactSubTitle,
  ContactTable,
  ContactRow,
  ContactHeading,
  ContactData,
  LinkedInIcon,
  ContactLink,
  ContactList,
  ContactListItem,
  MailIcon,
  CallIcon,
  ContactNumber,
} from "./contact.styles";
import team from "../../assets/images/team.webp";

const Contact = () => {
  return (
    <ContactContainer id="contact">
      <ContactWrapper>
        <ContactLeft>
          <Image src={team} alt="lets connect and collab" />
        </ContactLeft>
        <ContactRight>
          <ContactTitle>Lets Connect </ContactTitle>
          <ContactSubTitle>
            Feel free to contact me. Together we can build a better world.
          </ContactSubTitle>
          <ContactList>
            <ContactListItem>
              <MailIcon />
              <ContactLink href="mailto:designwithabhishek1996@gmail.com?subject=Mail from Our Site">
                designwithabhishek1996@gmail.com
              </ContactLink>
            </ContactListItem>
            <ContactListItem>
              <CallIcon />
              <ContactNumber>+91 8130368549</ContactNumber>
            </ContactListItem>
            <ContactListItem>
              <LinkedInIcon />
              <ContactLink
                target="_blank"
                href="https://www.linkedin.com/in/abhishekgupta196/"
              >
                LinkedIn
              </ContactLink>
            </ContactListItem>
          </ContactList>
        </ContactRight>
      </ContactWrapper>
    </ContactContainer>
  );
};

export default Contact;
