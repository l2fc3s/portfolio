import React from "react";
import { Link } from "react-router-dom";
import { ProjectData } from "./ProjectData";
import "./Projects.css";

function Projects() {
  return (
    <div className="project-section">
      <div className="project-container">
        {ProjectData.map((project) => {
          return (
            <div className="project-card">
              <Link to={project.link}>
                <img
                  className="project-image"
                  src={project.image}
                  alt={project.alt}
                />
              </Link>
              <h2 className="project-title">{project.title}</h2>
              <p className="description">{project.text}</p>
              <Link className="view-more" to={project.repo}>
                View on Github
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Projects;
