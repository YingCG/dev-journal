import React from 'react'
import '../style/hello.css'
import '../style/style.css'
import '../style/button.css'
import Ascii from './Ascii'
import Greeting from './Greeting'
import { Link } from 'react-router-dom'
import Project from './Project'

function Home() {

  return (
    <>
      <div className='main-content'>
        <div className="welcome" >

          <div className="welcome-text" style={{ backgroundColor: '#f7f5f2' }}>
                      <h1 className='big-text'>Welcome.</h1>
                      <p> Kiora! I am ying. I like to use bold, playful typography and graphics.
                        Combination with empathy and authenticity, I would like to bring a creative point of view on code. To build useful things, solving problems, and bring in good experiences with human-centered products.
                        The main area of my expertise is front-end development, HTML, CSS, React JS, building small and medium web apps.
                      </p>

                      <Link exact to='/projects/tools' className="double-line">
                        <div className='arrow-btn'></div>
                        <p className='link-text'>Some Tools I created</p>
                      </Link>

                      <Link exact to='/stories' className="double-line">
                        <div className='arrow-btn'></div>
                        <p className='link-text'>Some stories &amp; Internet I come across while learning to code.</p>
                      </Link>

                      <Link exact to='/development' className="double-line">
                        <div className='arrow-btn'></div>
                        <p className='link-text'>A project road-map to track my growth as a developer.</p>
                      </Link>

                      <a href='https://artyingchiu.wordpress.com/' className="double-line">
                        <div className='arrow-btn'></div>
                        <p className='link-text'>Design project I get involve.</p>
                      </a>
                      <br />
                      <button className='nav-btn' style={{ backgroundColor: '#151D3B' }}>Contact Me</button>
                    </div>
                    
        <div className="welcome-hello">
            <Ascii />
            <h3><Greeting greeting={' I design & build web applications with ReactJS.'} /> </h3>
            <p className='typewriter'>
              <Link className='sml-btn' exact to='/development' rel="projects road map"> Project Road Map</Link>
             How I grow as a developer?
            </p>
            <p className='typewriter'>
                <a className='sml-btn' href="http://patorjk.com/software/taag/#p=display&amp;f=Alpha&amp;t=hello" target="_blank" rel="ASCII art generator noreferrer" > ASCII Text Generator</a>
              I have lot of fun generating  ASCII text!!!
            </p>
          </div>
        </div>
        <Project />
      </div>
    </>
  )
}

export default Home
