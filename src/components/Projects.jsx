import React from "react";
import SquareList from './SquareList'
import Greeting from './Greeting'

function Projects() {
  return (
    <>
      <div className="Main-content">

      <h3> <Greeting /> </h3>
      {/* <h3 style={{color: '#ED0BFF'}}>The project roadmap</h3> */}
          <p>
          Programming is a universe itself yet to discover... Here, I am tracking my growth as a developer.
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
