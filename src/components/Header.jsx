import React from "react";
import { Link } from 'react-router-dom'
import Nav from "./Nav";

function Header() {
  return (
      <div className="header">
              <div className="header-left">

        <Link to='/'><img className="logo" src="images/YingCG.svg" alt="logo" style={{ width: "85px", height: "auto" }}/></Link>
          <div className="header-content">
          
            <h1>Ying Web Design &amp; Develop</h1>
            <h4 className="TopBottomLine">
              Some stories &amp; Internet I come across while learning to code.
            </h4>
          </div>
        </div>
        <div className="header-right">
          <Nav />
        </div>
      </div>
  );
}

export default Header;
