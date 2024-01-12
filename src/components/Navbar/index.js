import React from "react";
import { DiCssdeck } from "react-icons/di";
import { Bio } from "../../data/constants";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavItems,
  NavLink,
  ButtonContainer,
  GitHubButton,
  Span,
} from "./NavbarStyledComponent";

const Navbar = () => {
  return (
    <Nav>
      <NavbarContainer>
        <NavLogo to="/">
          <a
            href={Bio.github}
            style={{
              display: "flex",
              alignItems: "center",
              color: "white",
              marginBottom: "20;",
              cursor: "pointer",
            }}
          >
            <DiCssdeck size="3rem" /> <Span>Portfolio</Span>
          </a>
        </NavLogo>
        <NavItems>
          <NavLink href="#about">About</NavLink>
          <NavLink href="#experience">Experience</NavLink>
          <NavLink href="#projects">Project</NavLink>
          <NavLink href="#education">Education</NavLink>
        </NavItems>
        <ButtonContainer>
          <GitHubButton href={Bio.github} target="_blank">
            Github Profile
          </GitHubButton>
        </ButtonContainer>
      </NavbarContainer>
    </Nav>
  );
};

export default Navbar;
