import React, { useState } from "react";
import { Link as LinkR } from "react-router-dom";
import styled, { useTheme } from "styled-components";
import { Bio } from "../data/constants";
import { MenuRounded } from "@mui/icons-material";

const Nav = styled.div
  background-color: ${({ theme }) => theme.bg};
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: sticky;
  top: 0;
  z-index: 10;
  color: white;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  transition: background-color 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
;

const NavbarContainer = styled.div
  width: 100%;
  max-width: 1200px;
  padding: 0 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
;

const NavLogo = styled(LinkR)
  font-weight: 600;
  font-size: 20px;
  color: ${({ theme }) => theme.primary};
  text-decoration: none;
;

const NavItems = styled.ul
  display: flex;
  align-items: center;
  gap: 32px;
  list-style: none;

  @media screen and (max-width: 768px) {
    display: none;
  }
;

const NavLink = styled.a
  color: ${({ theme }) => theme.text_primary};
  cursor: pointer;
  text-decoration: none;
  position: relative;
  transition: color 0.3s ease-in-out;

  &:hover {
    color: ${({ theme }) => theme.primary};
  }

  &::after {
    content: "";
    display: block;
    width: 0;
    height: 2px;
    background: ${({ theme }) => theme.primary};
    position: absolute;
    bottom: -4px;
    left: 0;
    transition: width 0.4s ease-in-out;
  }

  &:hover::after {
    width: 100%;
  }
;

const ButtonContainer = styled.div
  display: flex;
  align-items: center;
  gap: 12px;
;

const GithubButton = styled.a
  background: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.text_primary};
  padding: 10px 20px;
  border-radius: 20px;
  text-decoration: none;
  transition: all 0.4s cubic-bezier(0.3, 0.7, 0.4, 1);

  &:hover {
    background: ${({ theme }) => theme.card_light};
    color: ${({ theme }) => theme.primary};
  }
;

const MobileIcon = styled.div
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
    cursor: pointer;
  }
;

const MobileMenu = styled.ul
  width: 100%;
  background: ${({ theme }) => theme.card_light + 99};
  position: absolute;
  top: 80px;
  right: 0;
  border-radius: 0 0 20px 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);

  transform: ${({ isOpen }) => (isOpen ? "translateY(0)" : "translateY(-100%)")};
  opacity: ${({ isOpen }) => (isOpen ? "1" : "0")};
  transition: all 0.6s cubic-bezier(0.3, 0.7, 0.4, 1);

  list-style: none;
  display: flex;
  flex-direction: column;
  padding: 16px 40px;
;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const theme = useTheme();

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <Nav>
      <NavbarContainer>
        <NavLogo to="/">Shatakshi Portfolio</NavLogo>

        <MobileIcon onClick={toggleMenu}>
          <MenuRounded />
        </MobileIcon>

        <NavItems>
          {["About", "Skills", "Experience", "Projects", "Education"].map(
            (item) => (
              <NavLink key={item} href={#${item}}>
                {item}
              </NavLink>
            )
          )}
        </NavItems>

        {isOpen && (
          <MobileMenu isOpen={isOpen}>
            {["About", "Skills", "Experience", "Projects", "Education"].map(
              (item) => (
                <NavLink key={item} href={#${item}} onClick={toggleMenu}>
                  {item}
                </NavLink>
              )
            )}
            <GithubButton href={Bio.github} target="_blank">
              Github Profile
            </GithubButton>
          </MobileMenu>
        )}

        <ButtonContainer>
          <GithubButton href={Bio.github} target="_blank">
            Github Profile
          </GithubButton>
        </ButtonContainer>
      </NavbarContainer>
    </Nav>
  );
};

export default Navbar;
