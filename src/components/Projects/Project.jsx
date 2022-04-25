import React from "react";
import { Link } from 'react-router-dom'
import Calculator from "../Calculator/Calculator";
import IconNav from "../Header/IconNav";
import TodoList from "../Tools/TodoList";


function Project() {


<<<<<<< HEAD
    return(
        <div className="wrapper">
        <div className='projects-header'>
            <h1 className="double-line">Some project I created.</h1>
            <IconNav />
        </div>
        <div className="case-study-container">
          <div className="case-study">
            <div className="project" >
||||||| 78864c9a
    return(
        <div className="wrapper">
            <h1 className="double-line">Some project I created.</h1>
        <div className="case-study-container">
          <div className="case-study">
            <div className="project" >
=======
  return (
    <div className="wrapper">

      <h1 className="double-line">Some project I created.</h1>

      <div className="case-study-container">

        <div className="case-study">
          <div className="project" >
>>>>>>> f88c38d20d91b29fae700dd0cca6f710d87cfa8e
            <a href="https://yingcg.github.io/EyeCandyCinema/" target="_blank" rel="noreferrer">
              <img className='project-img' src='/images/EyeCandyCinema.jpg' alt='website interface' width="100%" height="auto" />
              {/* <iframe title='HTML | CSS' src="https://yingcg.github.io/EyeCandyCinema/" width="100%" height="300" /> */}
            </a>
            <div className="case-title double-line" > HTML | CSS</div>
            <p> My first website to demo basic building block of the Web to defines the meaning and structure of web content. </p>
          </div>
        </div>

        <div className="case-study">
          <div className="project">
            <a href="https://yingcg.github.io/retouchbarn/" target="_blank" rel="noreferrer">
              <img className='project-img' src='/images/retouchbarn.jpg' alt='website interface' width="100%" height="auto" />
            </a>
            <div className="case-title double-line"> HTML | CSS | JavaScript</div>
            <p> This is a responsive web development </p>
          </div>
        </div>

        <div className="case-study">
          <div className="project">
            <a href="http://photoimagecbd.herokuapp.com/" target="_blank" rel="noreferrer">
              <img className='project-img' src='/images/photoimagecbd.jpg' alt='website interface' width="100%" height="auto" />
            </a>
            <div className="case-title double-line">ReactJs | Express.js | CSS |  Heroku</div>
            <p> An React Application that using JavaScript library building with component-based. This help me to understand object-oriented design.</p>
          </div>
        </div>

        <div className="case-study">
          <div className="project" width="100%" height="auto">
            <Link className='project-img' exact to='/projects/calculator'>
              <img className='project-img' src='/images/Calculator.jpg' alt='calculator' width="100%" height="auto" />
            </Link>
            <div className="case-title double-line">ReactJS | Redux | CSS </div>
            <p> A calculator that I code along with a youtube tutorial understanding useReduser.</p>
          </div>
        </div>

        <div className="case-study">
          <div className="project" width="100%" height="auto">
            <Link className='project-img' exact to='/projects/todolist'>
              <img className='project-img' src='/images/TodoList.jpg' alt='todolist' width="100%" height="auto" />
            </Link>
            <div className="case-title double-line">ReactHook | CSS </div>
            <p> A To-do-List using concept of React From to handle event.</p>
          </div>
          <div className="case-study">
            <div className="project" width="100%" height="auto">
            <Link className='project-img' exact to='/projects/shapes-gallery'>
              <img className='project-img' src='/images/Shapes.png' alt='website interface'  width="100%" height="auto"/>
            </Link>
            <div className="case-title double-line">Create shapes </div>
              </div>
          </div>
        </div>

      <div className="case-study">
        <div className="project" width="100%" height="auto">
          <Link className='project-img' exact to='/development'>
            <img className='project-img' src='/images/ProjectRoadmap.jpg' alt='colour-pallete' width="100%" height="auto" />
          </Link>
          <div className="case-title double-line">Colour pallete </div>
          <p> We can change the array of predefined colours, also able to change each individual colour with onClick event.</p>
        </div>
      </div>

      </div>
      </div>
    )
}

export default Project