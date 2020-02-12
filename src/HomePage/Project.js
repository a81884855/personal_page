import React, { useState } from "react";
import { Col } from "react-bootstrap";
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

  return (
    <>
      <Col
        className="project "
        style={{
          backgroundImage: !hover ? `url(${images[0]})` : null,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover"
        }}
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
        <div className="projectDescr ">
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
