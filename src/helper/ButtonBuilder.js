import React from "react";
import { Button } from "react-bootstrap";

const colors = [
  "danger",
  "success",
  "primary",
  "secondary",
  "info",
  "warning",
  "dark",
];

const ButtonBuilder = (skill, index, selected = [], filterProjects) => {
  return (
    <Button
      className="tech"
      key={skill}
      variant={
        selected.includes(skill)
          ? `${colors[index % colors.length]}`
          : `outline-${colors[index % colors.length]}`
      }
      onClick={() => (filterProjects ? filterProjects(skill) : null)}
    >
      {skill}
    </Button>
  );
};

export default ButtonBuilder;
