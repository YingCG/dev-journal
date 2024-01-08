import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import "./components/style/style.css";
import "./components/style/button.css";
import Home from "./pages/Home";
import Design from "./pages/Design";
import Projects from "./pages/Projects";
import Hello from "./pages/Hello";
import Css from "./components/ProjectsRoadMap/Css";
import JsBasic from "./components/ProjectsRoadMap/JsBasic";
import Tools from "./components/Tools/Tools";
import TodoList from "./components/Tools/TodoList/TodoList";
import TimedShapes from "./components/TimedShapes/TimedShapes";
import Calculator from "./components/Tools/Calculator/Calculator";
import Pseudocode from "./components/Stories/Pseudocode";
import About from "./pages/About";

function App() {
  return (
    <>
      <div className="app-container">
        <Router>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/design" element={<Design />} />
            <Route exact path="/development" element={<Projects />} />
            <Route exact path="/hello" element={<About />} />
            <Route exact path='/projects/css' element={<Css/>} />
            <Route exact path='/projects/javascript-basic' element={<JsBasic/>} />
            <Route exact path='/projects/tools' element={<Tools/>} />
            <Route exact path='/projects/calculator' element={<Calculator/>} />
            <Route exact path='/projects/shapes-gallery' element={<TimedShapes/>} />
            <Route exact path='/projects/todolist' element={<TodoList/>} />
            <Route exact path='/stories' element={<Pseudocode />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}
export default App;
