import React from 'react'
import Ascii from './Ascii'
import Greeting from './Greeting'


function Home () {
  return (
    <>
        <Ascii />
        <h3><Greeting /> </h3>
        <p>
        Programming is a universe itself yet to discover... Here, I am tracking my growth as a developer.
        </p>
        <p>
        To build useful things, solving problems, and bring in good experiences with human-centered products. 
        I am approaching problems with empathy, creativity, and authenticity with harmonic interface.
        The main area of my expertise is front-end development, HTML, CSS, React JS, building small and medium web apps.
        </p>
        <h5>By the way, if you use Click here to have fun generating your ASCII text in a new tab if you are curious about it!!! 
           <a href="http://patorjk.com/software/taag/#p=display&amp;f=Alpha&amp;t=hello" target="_blank" rel="noopener noreferrer" >  ASCII Text Generator </a>
        </h5>
    </>
  )
}

export default Home
