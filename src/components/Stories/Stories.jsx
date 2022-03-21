import React from "react";
import storiesData from '../../data/humanskills'
import Story from "./Story";
import '../style/squarelist.css'
import '../style/hello.css'
import ButtonsMenu from "../Treerings/ButtonsMenu";

function Stories() {
  // const [toggle, setToggle] = useState(0)
  return (
    <>
        <div className='main-content' style={{background: '#F0ECE3'}}>
        <div className="stories" >
        <div className="stories-text" >
          <h2>Learning to program and learning to think. </h2>
          <p> 
          Bad days build better days!
          Every problem come across is a learning curve for me.
          How to code enjoyable and consistent? 
           To remind myself to Keep Calm and Stay Curious, I practice some Human skills to code along.
            </p>
            {/* <p> Below are some de-tress checklist base on the situation I am facing.</p> */}
          </div>
          {/* <img className="treerings" src="../images/treestump.svg" alt="treerings"/> */}
          <ButtonsMenu />

          {/* <div className='square-list'>
            <div className="stories">
            {storiesData.map (stories => {
              return (
              <Story key={stories.id} title={stories.title} description={stories.description} />
              )
            })}

          </div>
          </div>  */}
          </div>
      </div>
    </>
  );
}

export default Stories;
