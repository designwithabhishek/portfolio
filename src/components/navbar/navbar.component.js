import React, { useState } from "react";
import {
  Logo,
  NavContainer,
  NavLink,
  NavList,
  Menu,
  Close,
} from "./navbar.styles";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = (isOpen) => (e) => {
    setIsOpen(isOpen);
  };

  return (
    <NavContainer>
      <Logo>Design with Abhishek</Logo>
      {!isOpen ? (
        <Menu onClick={handleClick(true)} />
      ) : (
        <Close onClick={handleClick(false)} />
      )}

      <NavList isOpen={isOpen}>
        <NavLink href="#home">Home</NavLink>
        <NavLink href="#about">About</NavLink>
        <NavLink href="#work">My Work</NavLink>
        <NavLink href="#skills">Skills</NavLink>
        <NavLink href="#contact">Contact</NavLink>
      </NavList>
    </NavContainer>
  );
};

export default NavBar;
