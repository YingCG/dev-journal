import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Stories from "./Stories";
import Footer from "./Footer";
import Css from "./Css";
import JsBasic from "./JsBasic";
import Calculator from "./Calculator";
import '../style/style.css'
import '../style/button.css'
// import About from "./About";
import Design from "./Design";
import Projects from "./Projects";
import TodoList from "./TodoList";
import ShapeList from "./ShapeList";


function App() {
  
    
  return (
      <>
        <div className="app-container">
        <Router>
         <Header/>
          <Routes>
            <Route exact path='/' element={<Home/>} />
            <Route exact path='/design' element={<Design/>} />
            <Route exact path='/development' element={<Projects/>} />
            <Route exact path='/projects/css' element={<Css/>} />
            <Route exact path='/projects/javascript-basic' element={<JsBasic/>} />
            <Route exact path='/projects/calculator' element={<Calculator/>} />
            <Route exact path='/projects/create-shape' element={<ShapeList/>} />
            <Route exact path='/projects/todolist' element={<TodoList/>} />
            <Route exact path='/stories' element={<Stories/>} />
          </Routes>
        <Footer />
        </Router>
        </div>
      </>
  )
}
export default App
