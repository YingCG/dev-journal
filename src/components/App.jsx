import React from "react";
import { Route } from "react-router-dom";

import Header from "./Header";
import Home from "./Home";
import Projects from "./Projects";
import Stories from "./Stories";
import Footer from "./Footer";

function App() {
    
  return (
      <>
        <div className="app-container">
          <Header />
          <Home />
          <Projects />
          <Stories />
          <Footer />  
        </div>
      </>
  )
}
export default App
