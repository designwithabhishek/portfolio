import styled, { css } from "styled-components";
import { ReactComponent as MenuIcon } from "../../assets/icons/menu.svg";
import { ReactComponent as CloseIcon } from "../../assets/icons/close.svg";

export const NavContainer = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding-top: 3rem;
`;

export const Logo = styled.h2`
  font-weight: 300;
`;

export const NavList = styled.nav`
  display: flex;
  gap: 1.5rem;
  @media (max-width: 828px) {
    flex-direction: column;
    position: absolute;

    background-color: #1d1d1d;
    width: 100vw;
    height: 100vh;
    padding: 2rem;
    right: -10%;
    top: 0;
    z-index: 100;
    align-items: center;
    transition: transform 250ms ease-in-out;
    transform: ${({ isOpen }) =>
      isOpen ? `translateX(0%)` : `translateX(100%)`};
  }
`;

export const NavItem = styled.li``;

export const NavLink = styled.a`
  text-decoration: none;
  font-weight: 500;
  color: #151515;
  @media (max-width: 828px) {
    color: white;
    font-size: 3rem;
    &:nth-of-type(1) {
      margin-top: 7rem;
    }
  }

  &:hover {
    background: linear-gradient(to right, #4568dc, #b06ab3);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
  }
`;
export const BaseIcon = css`
  position: absolute;
  top: 2rem;
  right: 3rem;
  color: color;
  width: 4rem;
  height: 4rem;
  display: none;
  z-index: 200;
  color: white;
  @media (max-width: 828px) {
    display: block;
  }
`;

export const Menu = styled(MenuIcon)`
  ${BaseIcon}
  color:#1f1f1f;
`;

export const Close = styled(CloseIcon)`
  ${BaseIcon}
  color: white;
  fill: white;
`;
