import React from "react";
import SquareList from './SquareList'


function Projects() {
  return (
    <>
      <div className="Main-content">

          <h3 style={{color: '#ED0BFF'}}>The project roadmap of my grow as a developer.</h3>
          <p>
          I am constantly learning and exploring the possibilities to approach problems. 
          As a start, I will first using this <strong>Projects Roadmap</strong> to create and show the projects I have developed...
          Eventually I will tell you the full stories. Write down how and why I solved coding problems, and reveal hurdles in my workflow.
          <SquareList />
            </p>
        </div>
            </>
  );
}

export default Projects;
