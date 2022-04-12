import React from "react";
import Project from "./Project";
import SquareList from "../SquareList/SquareList";
import Header from "../Header/Header";
// import BigSquare from "../SquareList/BigSquare";
import Footer from "../Footer/Footer";

function Projects() {
  return (
    <>
      <Header />
      <div className="main-content" >
      <SquareList />
      <Project />
      </div>
      <Footer />
            </>
  );
}

export default Projects;
