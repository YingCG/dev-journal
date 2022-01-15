import React from "react";
import SquareList from './SquareList'


function Projects() {
  return (
    <>
      <div className="page-container">
        <div className="container">
          <h2> Some of the projects I have developed</h2>
          <h3> Every problem I come across is a learning journey for me</h3>
          <p>
            Programming is a universe itself yet to discover... Here, I am tracking my growth as a developer. <br/>
            To start, I will have links to some of my practice projects and some research about human skills I practice while I code along. <br />
            Eventually I will write down how and why I solved coding problems every day, and reveal hurdles in my workflow. <br/>
            I am having so much in this learning journey! ((  ͡• ʖ  ͡• )) <br />
          </p>
          <SquareList />
        </div>
      </div>
    </>
  );
}

export default Projects;
