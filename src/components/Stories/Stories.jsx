import React from "react";
import storiesData from '../../data/humanskills'
import Story from "./Story";
import '../style/squarelist.css'
import '../style/treerings.css'
import '../style/hello.css'
import ButtonsMenu from "../Treerings/ButtonsMenu";
import { Link } from 'react-router-dom'
import Nav from "../Header/Nav";

function Stories() {
  // const [toggle, setToggle] = useState(0)
  return (
    <>
        <div className='main-content' style={{background: '#62917F'}}>
        <div className="stories" >
        <div className="stories-text" >
        <Link to='/'><img className="logo" src="./images/YingCG.svg" alt="logo"/></Link>
          <h1 className='big-text' style={{textTransform: 'Uppercase'}}>Solving Problems... </h1>
          <h1 className='subtitle' > Learning to Code.</h1>
          <p> 
          Bad days build better days!
          Every problem come across is a learning curve for me.
          How to code enjoyable and consistent? 
           To remind myself to Keep Calm and Stay Curious, I practice some Human skills to code along.

            </p>
            <Link exact to='/hello'><button className='nav-btn'>Humanity</button></Link>
            <Link exact to='/development'><button className='nav-btn'>Tech</button></Link>
            <Link exact to='/art'><button className='nav-btn'>Aesthetic</button></Link>
            {/* <a href="mailto:yingchiu@live.com"><button className='nav-btn'>Contact Me</button></a> */}
            {/* <p> Below are some de-tress checklist base on the situation I am facing.</p> */}
          </div>
          {/* <img className="treerings" src="../images/treestump.svg" alt="treerings"/> */}
          <ButtonsMenu />

          </div>
          <div className='square-list'>
            <div className="stories">
            {storiesData.map (stories => {
              return (
              <Story key={stories.id} title={stories.title} description={stories.description} />
              )
            })}

          </div>
          </div> 
      </div>
    </>
  );
}

export default Stories;
