import React from "react";
import storiesData from '../../data/humanskills'
import Story from "./Story";
import '../style/squarelist.css'
import '../style/treerings.css'
import '../style/hello.css'
import ButtonsMenu from "../Treerings/ButtonsMenu";
import { Link } from 'react-router-dom'
import Nav from "../Header/Nav";
import Header from "../Header/Header";

function Stories() {
  // const [toggle, setToggle] = useState(0)
  return (
    <>
    <Header/>
        <div className="stories" >
        <div className="stories-text" >
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
            <p> Below are some de-tress checklist base on the situation I am facing.</p>

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
