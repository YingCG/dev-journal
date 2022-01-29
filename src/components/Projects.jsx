import React from "react";
import SquareList from './SquareList'


function Projects() {
  return (
    <>
      <div className="page-container">

          <h3 style={{color: '#ED0BFF'}}>I am constantly learning and exploring the possibilities to approach problems</h3>
          <p>
          This is the project roadmap of my grow as a developer. The main area of my expertise is front-end development, HTML, CSS, React JS web apps.<br />
          As a start, I will first show some of the projects I have developed... Eventually I will tell you the full stories. Write down how and why I solved coding problems, and reveal hurdles in my workflow.
          <SquareList />
            </p>
        </div>
            </>
  );
}

export default Projects;
