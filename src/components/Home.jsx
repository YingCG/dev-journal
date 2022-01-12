import React from 'react'
import Ascii from './Ascii'
import Greeting from './Greeting'


function Home () {
  return (
    <>
        <Ascii />
        <h3><Greeting /> </h3>
        <p>
        Programming is a universe itself yet to discover... Here, I am tracking my growth as a developer. <br/>
        To start, I will have links to some of my practice projects and some research about human skills I practice while I code along. <br />
        Eventually I will write down how and why I solved coding problems every day, and reveal hurdles in my workflow. <br/>
        I am having so much in this learning journey! ((  ͡• ʖ  ͡• )) <br />
        <br />
        Click here to have fun generating your ASCII text in a new tab if you are curious about it!!! 
        <button className='btn dark'>
          <a href="http://patorjk.com/software/taag/#p=display&amp;f=Alpha&amp;t=hello" target="_blank" rel="noopener noreferrer" >ASCII Text Generator </a>
        </button>
      </p>
    </>
  )
}

export default Home
