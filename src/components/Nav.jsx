import React from 'react'
import { Link } from 'react-router-dom'


function Nav() {

  return (
    <>
      <nav className='top-nav'>
        <Link exact to='/'><button className='nav-btn'>Home</button></Link>
        <Link exact to='/development'><button className='nav-btn'>Development</button></Link>
        <Link exact to='/design'><button className='nav-btn'>Design</button></Link>
        {/* <Link exact to='/stories'><button className='nav-btn'>Stories</button></Link> */}
      </nav>
    </>
  )
}

export default Nav
