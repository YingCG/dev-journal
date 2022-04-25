import React from "react";
import { Link } from 'react-router-dom'
import Nav from "./Nav";

function Header() {
  return (
      <div className="header">
              <div className="header-left">

        <Link to='/'><img className="logo" src="/YingCG.svg" alt="logo"/></Link>
          <div className="header-content">
          
            <h1>Ying Web Design &amp; Develop</h1>
            
          </div>
        </div>
        <div className="header-right">
        {/* <div className="icongroup-dark">
        <IconNav/>
        </div> */}
        <Nav />
        </div>
      </div>
  );
}

export default Header;
