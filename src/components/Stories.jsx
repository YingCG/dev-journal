import React from "react";
import storiesData from '../data/humanskills'
import Story from "./Story";
import '../style/squarelist.css'
import '../style/hello.css'


function Stories() {

  // const [toggle, setToggle] = useState(0)

  return (
    <>
        <div className='main-content'>
        <div className="stories" >
        <div className="stories-text" >
          <h2>Learning to program and learning to think. </h2>
          <p> 
          Every problem come across is a learning curve for me.
          How to code enjoyable and consistent? 
           To remind myself to keep Calm and stay curious, I practice some Human skills to code along. 
          Below are some de-tress checklist base on the situation I am facing. </p>

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
      </div>
    </>
  );
}

export default Stories;
