import React from "react";
import SquareList from './SquareList'


function Projects() {
  return (
    <>
      <div className="page-container">
        <div className="container">
          <h2> From design to development </h2>
          <p>
           Here are some of the projects I have developed. To start, I will have links to some of my practice projects and some research about human skills I practice while I code along. 
           Eventually I will write down how and why I solved coding problems every day, and reveal hurdles in my workflow.  <br />
            </p>
          <SquareList />
        </div>
      </div>
    </>
  );
}

export default Projects;
