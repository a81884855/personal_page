import React, { useState } from "react";
import { Col, Image } from "react-bootstrap";
import ProjectDeatil from "./ProjectDetail";

const Project = ({
  images,
  name,
  website,
  github,
  description,
  technologies,
  projectHandler
}) => {
  const [hover, setHover] = useState(false);
  const [show, setShow] = useState(false);

  const descrStyle = {
    opacity: hover ? 1 : 0,
    position: "absolute",
    margin: "auto",
    textAlign: "center",
    top: 20,
    left: 0,
    bottom: 0,
    right: 0,
    zIndex: -1
  };
  const imgStyle = {
    opacity: hover ? 0.06 : 1,
    objectFit: "contain"
  };

  return (
    <>
      <Col
        className="project "
        xl={3}
        lg={4}
        md={5}
        sm={10}
        xs={10}
        onMouseEnter={() => {
          projectHandler(technologies);
          setHover(true);
        }}
        onMouseLeave={() => {
          projectHandler([]);
          setHover(false);
        }}
        onMouseDownCapture={() => setShow(true)}
      >
        <Image style={imgStyle} src={images[0]} />
        <div style={descrStyle}>
          <p className="projectName">{name}</p>
          <p className="description">{description}</p>
        </div>
      </Col>
      <ProjectDeatil
        name={name}
        website={website}
        technologies={technologies}
        description={description}
        images={images}
        github={github}
        show={show}
        onHide={() => setShow(false)}
      />
    </>
  );
};

export default Project;
