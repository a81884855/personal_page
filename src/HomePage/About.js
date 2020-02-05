import React from "react";
import { Row, Container } from "react-bootstrap";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import "hover.css/css/hover-min.css";

const About = () => {
  return (
    <div className="about">
      <Container>
        <Row className="justify-content-center">
          <h3>More about Me</h3>
          <FaGithub />
        </Row>
      </Container>

      <Row className="justify-content-center">
        <div>
          <a href="https://github.com/a81884855" className="social hvr-pop">
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/gary-guan/"
            className="social hvr-pop"
          >
            <FaLinkedinIn />
          </a>
        </div>
      </Row>
    </div>
  );
};

export default About;
