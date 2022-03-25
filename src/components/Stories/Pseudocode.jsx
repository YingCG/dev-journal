import React from 'react';
import Header from '../Header/Header';

function Pseudocode() {
    return (
        <>
            <Header />
            <div className='main-content'>
                <div className="stories" >
                    <div className="welcome-text" style={{ backgroundColor: '#f7f5f2' }}>
                        <h1>Problem Solving</h1>
                        <h3>Trying something... Googling... Ask for help...</h3>
                        <p>As a beginner coder, I am not able to grasp the concepts of how everyting works. To get understand of the full content, to get an overview. I use youtube, lots of googling, and asking help from friends I went over and over again with the basic knowledge. And come back to the given exercise. I have slowly understand where I didn't aware of. Repeat many time of the basic of the knowlege funtcions. Try again. Soon, I discover writing my own comment step by step can help me to understand the code for learning and future reference. Which is a step before Pseudocode.</p>

                        <h3>Pseudocode</h3>
                        <p>Here are 4-step guide to solving coding problems (with JavaScript code examples) sharing by RealToughCandy.</p>
                        <ul>
                            <li>STEP 1: Define the problem in human language</li>
                            <li>STEP 2: Iterate &amp; translate --{'>'} Pseudocode</li>
                            <li>STEP 3: Solve with programming language</li>
                            <li>STEP 3.5: Ask for help!</li>
                            <li>STEP 4: Improve working solution --{'>'} Refactor </li>
                        </ul>
                    </div>
                    <div className="welcome-hello" style={{padding: '0'}}>
                    <iframe width="100%" height="100%" src="https://www.youtube.com/embed/q7z4_0Keo5E" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Pseudocode