import React from 'react'
import Ascii from './Ascii'
import Greeting from './Greeting'


function Home () {
  return (
    <>
        <Ascii />
        <h3><Greeting /> </h3>
        <p>
        I am a graphic designer who are now recently starting my web development journey. 
        I am looking forward to designing useful things, solving problems, and bring in good experiences with a harmonic interface for the required function.
        <br />
        By the way, if you use Click here to have fun generating your ASCII text in a new tab if you are curious about it!!! 
        <button className='btn dark'>
          <a href="http://patorjk.com/software/taag/#p=display&amp;f=Alpha&amp;t=hello" target="_blank" rel="noopener noreferrer" >ASCII Text Generator </a>
        </button>
      </p>
    </>
  )
}

export default Home
