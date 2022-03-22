import React from "react";
import { Link } from 'react-router-dom'
import Calculator from "../Calculator/Calculator";
import TodoList from "../Tools/TodoList";


function Project(){


    return(
        <div className="wrapper">
            <h1 className="double-line">Some project I created.</h1>
        <div className="case-study-container">
          <div className="case-study">
            <div className="project" >
            <a href="https://yingcg.github.io/EyeCandyCinema/" target="_blank" rel="noreferrer">
              <img className='project-img' src='/images/EyeCandyCinema.jpg' alt='website interface'  width="100%" height="auto"/>
              {/* <iframe title='HTML | CSS' src="https://yingcg.github.io/EyeCandyCinema/" width="100%" height="300" /> */}
              </a>
            <div className="case-title double-line" > HTML | CSS</div>
            <p> My first website to demo basic building block of the Web to defines the meaning and structure of web content. </p>
            </div>
          </div>
          <div className="case-study">
            <div className="project">
            <a href="https://yingcg.github.io/retouchbarn/" target="_blank" rel="noreferrer">
            <img className='project-img' src='/images/retouchbarn.jpg' alt='website interface'  width="100%" height="auto"/>
              </a>
            <div className="case-title double-line"> HTML | CSS | JavaScript</div>
            <p> This is a responsive web development </p>
         </div>
          </div>
          <div className="case-study">
            <div className="project">
            <a href="http://photoimagecbd.herokuapp.com/" target="_blank" rel="noreferrer">
            <img className='project-img' src='/images/photoimagecbd.jpg' alt='website interface'  width="100%" height="auto"/>
            </a>
            <div className="case-title double-line">ReactJs | Express.js | CSS |  Heroku</div>
            <p> An React Application that using JavaScript library building with component-based. This help me to understand object-oriented design.</p>
              </div>
          </div>
          <div className="case-study">
            <div className="project" width="100%" height="auto">
            <Link className='project-img' exact to='/projects/calculator'><Calculator/>
            </Link>
            <div className="case-title double-line">ReactJS | Redux | CSS </div>
              </div>
          </div>
          <div className="case-study">
            <div className="project" width="100%" height="auto">
            <Link className='project-img' exact to='/projects/todolist'><TodoList/>
            </Link>
            <div className="case-title double-line">ReactHook | CSS </div>
              </div>
          </div>
        </div>
</div>
    )
}

export default Project