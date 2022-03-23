import React from "react";
import '../style/squarelist.css'
import '../style/treerings.css'
import '../style/hello.css'
import ButtonsMenu from "../Treerings/ButtonsMenu";
import { Link } from 'react-router-dom'
import Typewriter from "../Greeting/Typewriter";
import SquareList from "../SquareList/SquareList";
import Project from "../Projects/Project";

function Home() {

    return (
    <>
        <div className='home-content' style={{background: '#62917F'}}>
        <div className="stories" >
        <div className="stories-text" >
        <Link to='/'><img className="logo" src="./images/YingCG.svg" alt="logo"/></Link>
          <h1 className='big-text' style={{textTransform: 'Uppercase'}}>Solving Problems... </h1>
          <h1 className='subtitle' > <Typewriter message={'I design & build web application.'}/></h1>
          <p> 
          Bad days build better days!
          Every problem come across is a learning curve for me.
          How to code enjoyable and consistent? 
           To remind myself to Keep Calm and Stay Curious, I practice some Human skills to code along.

            </p>
            {/* <Link exact to='/stories'><button className='nav-btn'>Humanity</button></Link>
            <Link exact to='/hello'><button className='nav-btn'>Aesthetic</button></Link>
            <Link exact to='/development'><button className='nav-btn'>Tech</button></Link> */}
            <Link exact to='/development'><button className='nav-btn'>Projects</button></Link>
            <Link exact to='/hello'><button className='nav-btn'>About Me</button></Link>
            {/* <a href="mailto:yingchiu@live.com"><button className='nav-btn'>Contact Me</button></a> */}
            {/* <p> Below are some de-tress checklist base on the situation I am facing.</p> */}
          </div>
          <ButtonsMenu />
          </div>
      </div>
      <Project/>
    </>
  );
}

export default Home;
