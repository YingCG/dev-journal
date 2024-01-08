import React from "react";
import CurrentProject from "../components/ProjectsRoadMap/CurrentProject";
import SquareList from "../components/SquareList/SquareList";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

function Projects() {
  return (
    <>
      <Header />
      <div className="main-content" >
      <SquareList />
      <CurrentProject />
      </div>
      <Footer />
            </>
  );
}

export default Projects;
