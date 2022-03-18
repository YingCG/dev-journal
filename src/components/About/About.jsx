import React from 'react'
import Technologies from './Technologies'
import '../style/socialmedia.css'

function About () {
  return (
    <>
    
        <p>
        I am a full-stack web developer with a background in the design industry. 
        Building applications and problem solving fills me with joy which has driven me to make a career change into software development. 
        I am a graduate of Enspiral Dev Academy software development school, with over 1000 hours of coding experience under my belt.
        </p>

        <Technologies />
				<li>
					<a href="mailto:yingchiu@live.com">
						<span className="fa-solid fa-envelope" aria-hidden="true"></span>
						<span className="sr-only">Contact</span>
					</a>
				</li>
				<li>
					<a href="https://www.linkedin.com/in/yingchiu-goh/" target="_blank" rel="noreferrer">
						<span class="fa-brands fa-linkedin" aria-hidden="true"></span>
						<span className="sr-only">LinkedIn</span>
					</a>
				</li>
				<li>
					<a href="https://github.com/YingCG" target="_blank" rel="noreferrer">
						<span class="fa-brands fa-github" aria-hidden="true"></span>
						<span className="sr-only">Github</span>
					</a>
				</li>
    </>
  )
}

export default About
