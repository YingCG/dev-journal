import React from 'react';
import {FiDatabase}  from 'react-icons/fi';
import {FaLaptopCode}  from 'react-icons/fa';
import {MdFaceRetouchingNatural, MdNaturePeople}  from 'react-icons/md';
import {TiHeartOutline}  from 'react-icons/ti';
import {BsTerminalFill}  from 'react-icons/bs';
import '../style/tech.css'

function Technologies(){
    return(
        <>
        <div className='tech'>
            <div className="session">
                <div className="tech-icon">
                <MdNaturePeople/>
                <h3>Humanity</h3>
                </div>
                <ul>
                <li>Curious</li>
                <li>Creative</li>
                <li>Aesthetic</li>
                <li>Authentic</li>
            </ul></div>
            <div className="session">
                <div className="tech-icon">
                <MdFaceRetouchingNatural/>
                <h3>UX/UI Design</h3>
                </div>
                <ul>
                <li>Sketching</li>
                <li>User journeys</li>
                <li>Wire-framing</li>
                <li>Prototyping</li>
                <li>Adobe</li>
            </ul></div>
            <div className="session">
                <div className="tech-icon">
                <FaLaptopCode/>
                <h3>Front-End</h3>
                </div>
            <ul>
                <li>React.js</li>
                <li>Handlebars</li>
                <li>Javascript</li>
                <li>HTML &amp; CSS</li>
                <li>Sass/Scss</li>
            </ul></div>
            <div className="session">
            <div className="tech-icon">
                <FiDatabase/>
                <h3>Back-End</h3>
                </div>
            <ul>
                <li>Node.js</li>
                <li>Express.js</li>
                <li>SQLite</li>
                <li>Knex</li>
            </ul></div>
            <div className="session">
        <div className="tech-icon">
             <BsTerminalFill/>
                <h3>Others</h3>
        </div>
        <ul>
                <li>Terminal</li>
                <li>Git</li>
                <li>Heroku</li>
                <li>Mobile Development</li>
            </ul></div>
        </div>
        </>
    )
}

export default Technologies