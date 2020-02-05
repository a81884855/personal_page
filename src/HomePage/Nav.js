import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-scroll";
import Headroom from "react-headroom";

const Head = () => {
  return (
    <Headroom style={{ zIndex: 100 }}>
      <Navbar collapseOnSelect expand="md">
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Link
              className="nav-link"
              activeClass="active"
              to="home"
              spy={true}
              smooth={true}
              duration={500}
            >
              Home
            </Link>
            <Link
              className="nav-link"
              activeClass="active"
              to="projects"
              spy={true}
              smooth={true}
              duration={500}
            >
              Projects
            </Link>
            <Link
              className="nav-link"
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              duration={500}
            >
              About
            </Link>
            <Nav.Link href="/resume.pdf" download>
              Resume
            </Nav.Link>
          </Nav>
          <Navbar.Brand href="#home">
            <div id="brand">
              <img alt="" id="brand" src="./ScreenShot.png" />
              <p id="brand">Gary</p>
            </div>
          </Navbar.Brand>
        </Navbar.Collapse>
      </Navbar>
    </Headroom>
  );
};

export default Head;
