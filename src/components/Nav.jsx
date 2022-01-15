import React from 'react'
import { Link } from 'react-router-dom'


function Nav () {

  return (
    <>
      <nav>
        <Link to='/'><button className='nav-btn'>Home</button></Link>
        <Link to='/projects'><button className='nav-btn'>Projects</button></Link>
        <Link to='/stories'><button className='nav-btn'>Stories</button></Link>
      </nav>
    </>
  )
}

export default Nav
