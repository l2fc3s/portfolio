import React from "react";
import { Button } from "../../Button";
import { IoArrowForward } from "react-icons/io5";
import { ProjectData } from "./ProjectData";
import "./Projects.css";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.min.css";

function Projects() {
  return (
    <div id="projectSection" className="project-section">
      <ScrollAnimation animateIn="animate__fadeIn">
        <div className="header-div">
          <h1 className="project-header">Projects</h1>
        </div>

        <div className="project-container">
          {ProjectData.map((project) => {
            return (
              <div key={project.id} className="project-card">
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
          <a
            href="https://drive.google.com/file/d/1g8ZlfDuLVBhvRJzRqPOsmTzuCmwCT1_h/view?usp=sharing"
            target="blank"
          >
            <Button buttonSize="btn--medium">
              Resume {<IoArrowForward className="icon" />}
            </Button>
          </a>
        </div>
      </ScrollAnimation>
    </div>
  );
}

export default Projects;
