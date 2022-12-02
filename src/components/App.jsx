import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Css from "./ProjectsRoadMap/Css";
import JsBasic from "./ProjectsRoadMap/JsBasic";
import Tools from "./Tools/Tools";
import "./style/style.css";
import "./style/button.css";
import Design from "./HomePage/Design";
import Hello from "./HomePage/Hello";
import Projects from "./Projects/Projects";
import TodoList from "./Tools/TodoList";
import TimedShapes from "./TimedShapes/TimedShapes";
import Calculator from "./Calculator/Calculator";
import Home from "./HomePage/Home";
import Pseudocode from "./Stories/Pseudocode";

function App() {
  return (
    <>
      <div className="app-container">
        <Router>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/design" element={<Design />} />
            <Route exact path="/development" element={<Projects />} />
            <Route exact path="/projects/css" element={<Css />} />
            <Route
              exact
              path="/projects/javascript-basic"
              element={<JsBasic />}
            />
            <Route exact path="/projects/tools" element={<Tools />} />
            <Route exact path="/projects/calculator" element={<Calculator />} />
            <Route
              exact
              path="/projects/shapes-gallery"
              element={<TimedShapes />}
            />
            <Route exact path="/projects/todolist" element={<TodoList />} />
            <Route exact path="/hello" element={<Hello />} />
            <Route exact path="/stories" element={<Pseudocode />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}
export default App;
