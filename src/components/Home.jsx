import React from 'react'
import Ascii from './Ascii'


function Home () {
  return (
    <>
    <div className='Main-content'>
        <Ascii />
        <h3 style={{color: '#ED0BFF'}}> I design & build web applications with ReactJS. </h3>
        <p>
        To build useful things, solving problems, and bring in good human experiences. 
        I am approaching problems with empathy, creativity, authenticity and harmonic interface.
        </p>
        <h5>By the way, if you use Click here to have fun generating your ASCII text in a new tab if you are curious about it!!! 
           <a href="http://patorjk.com/software/taag/#p=display&amp;f=Alpha&amp;t=hello" target="_blank" rel="noopener noreferrer" >  ASCII Text Generator </a>
        </h5>
        
        </div>
    </>
  )
}

export default Home
