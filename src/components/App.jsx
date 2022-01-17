import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Projects from "./Projects";
import Stories from "./Stories";
import Footer from "./Footer";
import Project from "./Project";
import Css from "./Css";

function App() {
    
  return (
      <>
        <div className="app-container">
        <Router>
         <Header/>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/projects' element={<Projects/>} />
            <Route path='/projects/css' element={<Css/>} />
            {/* <Route path='/projects/:title' element={<Project/>} /> */}

            {/* <Route path='/projects/:title/:project' component={Project} /> */}
            <Route path='/stories' element={<Stories/>} />
          </Routes>
        <Footer />
        </Router>
        </div>
      </>
  )
}
export default App
