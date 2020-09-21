import styled from "styled-components";

export const NavbarContainer = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  height: 4rem;
  z-index: 1;

  display: flex;
  justify-content: space-between;
  align-items: center;

  transition-timing-function: ease-in;
  transition: all 0.5s;
`;

export const NavbarLogo = styled.img`
  position: fixed;
  left: 2rem;
  width: 8rem;
  object-fit: contain;
`;

export const NavbarAvatar = styled.img`
  position: fixed;
  right: 2rem;
  width: 3rem;
  object-fit: contain;
`;
