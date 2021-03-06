import React from 'react'
import { Link } from 'react-router-dom'
import Greeting from '../Greeting/Greeting';


function BigSquare() {
    return(
        <div className="big-square" >
            <h1 style={{ fontSize: '2.5rem'}}> Projects Roadmap </h1>
            <Greeting greeting={'Welcome to my coding journal. '} style={{color: '#3D087B'}} /> 
              <p> 
                I am constantly learning and exploring the possibilities to approach problems.

                As a start, I am using this <strong>Projects Roadmap</strong> to create and show the projects I have developed...
                Eventually I will tell you the full stories. Write down how and why I solved coding problems, and reveal hurdles in my workflow.
                <br/>
                <br/>
              </p>
          </div> 
    )
}

export default BigSquare