import React from 'react'
import '../style/hello.css'
import '../style/style.css'
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

                      <Link exact to='/projects/calculator' className="double-line">
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

                      <Link exact to='/design' className="double-line">
                        <div className='arrow-btn'></div>
                        <p className='link-text'>Design project I get involve.</p>
                      </Link>
                      <br />
                      <button className='nav-btn' style={{ backgroundColor: '#151D3B' }}>Contact Me</button>
                    </div>
                    
        <div className="welcome-hello">
            <Ascii />
            <h3><Greeting greeting={' I design & build web applications with ReactJS.'} /> </h3>
            <p style={{color: '#ED0BFF', fontSize: '15px'}}>
             How I grow as a developer?
              <Link exact to='/development' rel="projects road map" style={{fontSize: '13px', backgroundColor: '#ED0BFF', marginLeft: '0.5rem', paddingRight: '0.5rem', paddingLeft: '0.5rem', fontWeight: 'bold', borderRadius: '25px'}}> Project Road Map </Link>
            </p>
            <p style={{color: '#ED0BFF', fontSize: '15px'}}>
              I have lot of fun generating  ASCII text!!!
                <a href="http://patorjk.com/software/taag/#p=display&amp;f=Alpha&amp;t=hello" target="_blank" rel="ASCII art generator noreferrer" style={{fontSize: '13px', backgroundColor: '#ED0BFF', marginLeft: '0.5rem', paddingRight: '0.5rem', paddingLeft: '0.5rem', fontWeight: 'bold', borderRadius: '25px'}}> ASCII Text Generator </a>
            </p>
          </div>
        </div>
        <Project />
      </div>
    </>
  )
}

export default Home
