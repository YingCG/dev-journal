import React from 'react'
import '../components/style/hello.css'
import '../components/style/style.css'
import '../components/style/button.css'
import Ascii from '../components/Greeting/Ascii'
import Greeting from '../components/Greeting/Greeting'
import { Link } from 'react-router-dom'
import Header from '../components/Header/Header'
import Technologies from '../components/About/Technologies'
import IconNav from '../components/Header/IconNav'

function Hello() {

  return (
    <>
        <Header />
      <div className='main-content'>
        <div className="welcome" >

          <div className="welcome-text" style={{ backgroundColor: '#f7f5f2' }}>
                      <h1 className='big-text'>Kiora!  </h1>
                      <p> I am ying. I like to use bold, playful typography and graphics.
                        Combination with empathy and authenticity, I would like to bring a creative point of view on code. To build useful things, solving problems, and bring in good experiences with human-centered products.
                        The main area of my expertise is front-end development, HTML, CSS, React JS.
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

                      <a href='https://artyingchiu.wordpress.com/' target="_blank" rel="noreferrer" className="double-line">
                        <div className='arrow-btn'></div>
                        <p className='link-text'>Design project I get involve.</p>
                      </a>
                      <br />
                    </div>
                    
        <div className="welcome-hello">
            <Ascii />
            <h3><Greeting greeting={' I design & build web applications with ReactJS.'} /> </h3>
            <IconNav/>
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
        <Technologies />
      </div>
    </>
  )
}

export default Hello
