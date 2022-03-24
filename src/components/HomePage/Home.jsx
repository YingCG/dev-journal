import React from "react";
import '../style/squarelist.css'
import '../style/treerings.css'
import '../style/hello.css'
import ButtonsMenu from "../Treerings/ButtonsMenu";
import { Link } from 'react-router-dom'
import Typewriter from "../Greeting/Typewriter";
import Project from "../Projects/Project";
import IconNav from "../Header/IconNav";


function Home() {

    return (
    <>
        <div className='home-content' style={{background: '#1B4B36'}}>
        <div className="stories" >
        <div className="stories-text" >
        <Link to='/'><img className="logo" src="./images/YingCG.svg" alt="logo"/></Link>
          <h1 className='big-text' style={{textTransform: 'Uppercase'}}>Solving Problems... </h1>
          <h1 className='subtitle' > <Typewriter message={'Welcome to my dev journal.'}/></h1>
          <p> 
      
          Building applications and problem solving fills me with joy which has driven me to make a career change into web development. 

            </p>
            {/* <Link exact to='/stories'><button className='nav-btn'>Humanity</button></Link>
            <Link exact to='/hello'><button className='nav-btn'>Aesthetic</button></Link>
            <Link exact to='/development'><button className='nav-btn'>Tech</button></Link> */}
            <Link exact to='/development'><button className='nav-btn'>Projects</button></Link>
            <Link exact to='/hello'><button className='nav-btn'>About Me</button></Link>
          
          </div>
         <IconNav />
          <ButtonsMenu />
          </div>
      </div>
      <Project/>
    </>
  );
}

export default Home;
