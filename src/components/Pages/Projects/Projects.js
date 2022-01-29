import React from "react";
import { Button } from "../../Button";
import { IoArrowForward } from "react-icons/io5";

import { ProjectData } from "./ProjectData";
import "./Projects.css";

function Projects() {
  return (
    <div className="project-section">
      <div className="header-div">
        <h1 className="project-header">Here are a few things I've worked on</h1>
      </div>
      <div className="project-container">
        {ProjectData.map((project) => {
          return (
            <div className="project-card">
              <a target="_blank" href={project.link}>
                <img
                  className="project-image"
                  src={project.image}
                  alt={project.alt}
                />
              </a>
              <h2 className="project-title">{project.title}</h2>
              <p className="description">{project.text}</p>
              <a target="_blank" className="view-more" href={project.repo}>
                View on Github
              </a>
            </div>
          );
        })}
      </div>
      <div className="button-div">
        <Button buttonSize="btn--medium">
          Resume {<IoArrowForward className="icon" />}
        </Button>
      </div>
    </div>
  );
}

export default Projects;
