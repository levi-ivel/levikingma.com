import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faPython } from "@fortawesome/free-brands-svg-icons"; 


function Projects() {
  return (
    <div className="section-box">

      <h2>Projects</h2>

    {/* Displays project info of MostUsed (gif, TypeScript icon, GitHub link, project description) */}
      <div className="project-box">
        <img
          src="assets/MostUsed.gif"
          alt="Project Showcase"
          className="project-gif"
        />
        <div className="project-info">
          <h3>MostUsed</h3>
          <div className="project-icons">
            <div className="tech-icons">
            <img src="./assets/code-solid.svg" alt="code" className="icon" />
              <span>TypeScript</span>
            </div>
              <a href="https://github.com/levi-ivel/MostUsed" target="_blank" rel="noopener noreferrer" className="github-link">
              <FontAwesomeIcon icon={faGithub} className="icon" />
              <span>See Code</span>
            </a>
          </div>
          <p className="further-info">
              MostUsed is a plugin I made for note taking webapp Obsidian. It takes the most used words from a persons vault, folder or note and displays those words in a graph by usage <br/> <br/>
              The project was started on 01-05-2024, merged with Obsidian's branch on 18-05-2024 and is currently sitting at 1210 downloads
          </p>
        </div>
      </div>

    {/* Displays project info of MostUsed (gif, Python icon, GitHub link, project description) */}
      <div className="project-box">
        <img
          src="assets/Dess.gif"
          alt="Project Showcase"
          className="project-gif"
        />
        <div className="project-info">
          <h3>Desstop</h3>
          <div className="project-icons">
            <div className="tech-icons">
              <FontAwesomeIcon icon={faPython} className="icon" />
              <span>Python, TKinter</span>
            </div>
            <a href="https://github.com/levi-ivel/Desstop" target="_blank" rel="noopener noreferrer" className="github-link">
              <FontAwesomeIcon icon={faGithub} className="icon" />
              <span>See Code</span>
            </a>
          </div>
          <p className="further-info">
            Desstop is an ASCII faced desktop assistant that can perform numerous commands via a terminal. It can set countdowns, open programs, run routines of other commands and much more <br/> <br/>
            This project was started on 19-05-2024 and finished on 31-05-2024
          </p>
        </div>
      </div>

    </div>
  );
}

export default Projects;
