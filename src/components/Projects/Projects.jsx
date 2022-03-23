import React from "react";
import Project from "./Project";
import SquareList from "../SquareList/SquareList";
import Header from "../Header/Header";
import BigSquare from "../SquareList/BigSquare";


function Projects() {
  return (
    <>
      <div className="main-content" >
      <Header />
      <SquareList />
      <BigSquare />
      <Project />
      </div>
            </>
  );
}

export default Projects;
