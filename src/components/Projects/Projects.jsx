import React from "react";
import Project from "./Project";
import SquareList from "../SquareList/SquareList";
import Header from "../Header/Header";
import BigSquare from "../SquareList/BigSquare";


function Projects() {
  return (
    <>
      <Header />
      <div className="main-content" >
      <SquareList />
      <Project />
      </div>
            </>
  );
}

export default Projects;
