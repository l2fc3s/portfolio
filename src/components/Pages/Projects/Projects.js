import React from "react";
import { Button } from "../../Button";
import { IoArrowForward } from "react-icons/io5";
import Fade from "react-reveal/Fade";
import { ProjectData } from "./ProjectData";
import "./Projects.css";
import resume from "../../../resume/Larry LaMar Resume 2022.pdf";
import { Link } from "react-router-dom";

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
                <p className="link-text">
                  <a target="_blank" className="view-more" href={project.repo}>
                    View code
                  </a>
                  {project.hasViewProjectLink && (
                    <span>
                      {" "}
                      or{" "}
                      <a
                        target="_blank"
                        className="view-more"
                        href={project.link}
                      >
                        See project
                      </a>
                    </span>
                  )}
                </p>
              </div>
            );
          })}
        </div>

        <div className="button-div">
          <Link to={resume} download target="blank">
            <Button buttonSize="btn--medium">
              Resume {<IoArrowForward className="icon" />}
            </Button>
          </Link>
        </div>
      </Fade>
    </div>
  );
}

export default Projects;
