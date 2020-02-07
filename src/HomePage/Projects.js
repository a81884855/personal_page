import React from "react";
import { Row, Col } from "react-bootstrap";
import Project from "./Project";
import ButtonBuilder from "../helper/ButtonBuilder";

const data = [
  {
    name: "Super Card Saver",
    website: "http://www.supercardsaver.com",
    github: "https://github.com/a81884855/card-saver",
    technologies: [
      "Full-Stack",
      "React.JS",
      "Node.JS",
      "MongoDB",
      "AWS",
      "Docker",
      "GraphQL",
      "Serverlss"
    ],
    description:
      "I designed a website to help people identify credit cards with most cash reward.",
    images: [
      "https://i.imgur.com/LaEzRIS.png",
      "https://i.imgur.com/JGWqubB.png",
      "https://i.imgur.com/tWBe9S8.png",
      "https://i.imgur.com/uXhtalb.png"
    ]
  },
  {
    name: "6 Full-Tables",
    website: "",
    github: "https://github.com/fulltable",
    technologies: ["Back-End", "AWS"],
    description:
      "Creating and scaling backend of a resturant reservation application.",
    images: [
      "https://i.imgur.com/sgiAS38.png",
      "https://i.imgur.com/pBDtwH2r.png",
      "https://i.imgur.com/pBDtwH2r.png"
    ]
  },
  {
    name: "Mine Sweeper",
    website: "/minesweeper",
    github: "https://github.com/a81884855/mine-sweeper",
    technologies: ["Front-End", "React.JS", "Node.JS", "MongoDB", "AWS"],
    description: "A mine sweeper mini application with 3 difficulty level",
    images: [
      "https://i.imgur.com/6CGzlKa.png",
      "https://i.imgur.com/0UXQ8Hb.png",
      "https://i.imgur.com/YDOX9aH.png"
    ]
  },
  {
    name: "Space X",
    website: "/space-x",
    github: "https://github.com/a81884855/space-x",
    technologies: [
      "Full-Stack",
      "Serverlss",
      "React.JS",
      "GraphQL",
      "MongoDB",
      "AWS"
    ],
    description: "Space X rockets launches information search engine",
    images: [
      "https://i.imgur.com/94lOeiB.png",
      "https://i.imgur.com/WTdBBdx.png",
      "https://i.imgur.com/oA6XkeT.png"
    ]
  },
  {
    name: "Personal Page",
    website: "http://www.gary-guan.com/",
    github: "https://github.com/a81884855/personal-page",
    technologies: ["Full-Stack", "React.JS", "Node.JS", "AWS", "Docker"],
    description: "My personal page, Do you like it? ",
    images: [
      "https://i.imgur.com/CnsqPqa.png",
      "https://i.imgur.com/79jyKkar.jpg"
    ]
  },
  {
    name: "Spending Report",
    website: "https://gary-tree-map.herokuapp.com/",
    github: "https://github.com/a81884855/data-analysis",
    technologies: ["MERN-Stack", "Heroku", "Front-End"],
    description: "Import CSV file and generate a diagram",
    images: ["https://i.imgur.com/lsHSNZ1.png"]
  }
];

const skills = [
  "All",
  "Full-Stack",
  "Front-End",
  "Back-End",
  "React.JS",
  "Node.JS",
  "MongoDB",
  "Docker",
  "GraphQL",
  "AWS",
  "Heroku"
];

class Projects extends React.Component {
  constructor() {
    super();
    this.state = {
      projects: data,
      selected: ""
    };
  }

  toggleHandler(e) {
    this.setState({
      selected: [e.target.id]
    });
  }

  projectHandler(technologies) {
    this.setState({
      selected: technologies
    });
  }

  render() {
    const { projects, selected } = this.state;
    return (
      <div id="projects">
        <Row className="justify-content-md-center" lg={10} md={11}>
          <Col xs={12} sm={2} style={{ maxWidth: 150 }}>
            <h1 id="skills">Skills: </h1>
          </Col>
          <Col style={{ marginLeft: 10 }} xs={10} md={8}>
            {skills.map((skill, index) =>
              ButtonBuilder(skill, index, selected)
            )}
          </Col>
        </Row>
        <Row className="justify-content-md-center">
          {projects.map(project => (
            <Project
              key={project.name}
              name={project.name}
              website={project.website}
              technologies={project.technologies}
              description={project.description}
              images={project.images}
              github={project.github}
              projectHandler={this.projectHandler.bind(this)}
            />
          ))}
        </Row>
      </div>
    );
  }
}

export default Projects;
