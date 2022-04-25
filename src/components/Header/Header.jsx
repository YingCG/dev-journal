import React from "react";
import { Link } from 'react-router-dom'
import IconNav from "./IconNav";
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
<<<<<<< HEAD
        {/* <div className="icongroup-dark">
        <IconNav/>
        </div> */}
||||||| 78864c9a
        <div className="icongroup-dark">
        <IconNav/>
        </div>
=======
        <div>
        <IconNav mode="icongroup-dark"/>
        </div>
>>>>>>> f88c38d20d91b29fae700dd0cca6f710d87cfa8e
        <Nav />
        </div>
      </div>
  );
}

export default Header;
