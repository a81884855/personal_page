import React from "react";
import { Row, Image, Button, Modal, Carousel } from "react-bootstrap";
import { GoGithubAction, GoMarkGithub } from "react-icons/go";
import ButtonBuilder from "../helper/ButtonBuilder";

const ProjectDetail = ({
  name,
  images,
  description,
  technologies,
  website,
  github,
  show,
  onHide,
}) => {
  return (
    <Modal
      show={show}
      onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">{name}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Carousel>
          {images.map((image) => (
            <Carousel.Item style={{ height: "auto" }} key={image}>
              <Image src={image} alt="First slide" fluid />
            </Carousel.Item>
          ))}
        </Carousel>
        <Row className="projectDetailContainer">
          <h4>Detail:</h4>
          <h6>{description}</h6>
        </Row>
        <Row className="projectDetailContainer">
          <h4>Techologies Used</h4>
          <div>
            {technologies.map((technology, index) =>
              ButtonBuilder(technology, index)
            )}
          </div>
        </Row>
      </Modal.Body>
      <Modal.Footer>
        <div className="mr-auto">
          {github && (
            <a
              href={github}
              className="projectLink hvr-pop"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GoMarkGithub />
            </a>
          )}
          {website && (
            <a href={website} className="projectLink hvr-pop">
              <GoGithubAction />
            </a>
          )}
        </div>

        <Button onClick={onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ProjectDetail;
