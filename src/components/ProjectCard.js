
import React from "react";

const ProjectCard = ({ project }) => (
  <div className="project-card">
    <img src={project.image} alt={project.title} />
    <h3>{project.title}</h3>
    <p>{project.description}</p>
    <a href={project.link} target="_blank" rel="noopener noreferrer">
      Ver Proyecto
    </a>
  </div>
);

export default ProjectCard;
