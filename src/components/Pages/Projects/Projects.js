import React from "react";
import { Button } from "../../Button";
import { IoArrowForward } from "react-icons/io5";
import Fade from "react-reveal/Fade";
import { ProjectData } from "./ProjectData";
import "./Projects.css";

function Projects() {
  return (
    <div id="projectSection" className="project-section">
      <Fade>
        <div className="header-div">
          <h1 className="project-header">Projects</h1>
        </div>
      </Fade>
      <Fade>
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
      </Fade>
    </div>
  );
}

export default Projects;
