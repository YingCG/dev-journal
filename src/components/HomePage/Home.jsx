import React from "react";
import '../style/squarelist.css'
import '../style/treerings.css'
import '../style/hello.css'
import ButtonsMenu from "../Treerings/ButtonsMenu";
import { Link } from 'react-router-dom'
import Typewriter from "../Greeting/Typewriter";
import Project from "../Projects/Project";
import IconNav from "../Header/IconNav";
import Footer from "../Footer/Footer";


function Home() {

  return (
    <>
      <div className='home-content' style={{ background: '#0a5944' }}>
        <div className="stories" >
          <div className="stories-text" >
            <Link to='/'><img className="logo" src="./images/YingCG.svg" alt="logo"/></Link>
            <h1 className='title'>Art of Problem Solving... </h1>
            <h1 className='subtitle' > <Typewriter message={'I design & build web application :-)'} /></h1>
<p>
            Programming is a universe by itself yet to discover...
            Here I am tracking my growth as a developer.
            To share some project, stories or website I come across while learning to code.
            </p>
            <p>
          How to code enjoyably and consistently? 
           To Keep Calm and Stay Curious, I also practice human skills. Growing like a tree, with patience and commitment. <br/>
            </p>

            {/* <Link exact to='/stories'><button className='nav-btn'>Humanity</button></Link>
            <Link exact to='/hello'><button className='nav-btn'>Aesthetic</button></Link>
          <Link exact to='/development'><button className='nav-btn'>Tech</button></Link> */}
            <Link exact to='/development'><button className='nav-btn'>Projects</button></Link>
            <Link exact to='/hello'><button className='nav-btn'>About Me</button></Link>
          </div>
          <div className="stories-btn">
            <IconNav />
            <ButtonsMenu />
          </div>
        </div>
      </div>
      <Project />
      <Footer/>
    </>
  );
}

export default Home;
