import React from 'react'
import { Link } from 'react-router-dom'


function Nav() {

  return (
    <>
      <nav className='top-nav'>
        <Link exact to='/development'><button className='nav-btn-dark'>Projects</button></Link>
        <Link exact to='/hello'><button className='nav-btn-dark'>About Me</button></Link>

      </nav>
    </>
  )
}

export default Nav
