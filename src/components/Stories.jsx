import React from "react";
import storiesData from '../data/humanskills'
import Story from "./Story";

function Stories() {

  // const [toggle, setToggle] = useState(0)

  return (
    <>
      <div className="page-container">
          <h2>B.Y.O. Cup Corner. </h2>
          <p> Every problem I come across is a learning journey for me, here are some Human skills I practice to code along. To remind myself practicing how to be kind, have help to growth and develop my strength.</p>
          <div className="stories square-list">
            {storiesData.map (stories => {
              return (
              <Story key={stories.id} title={stories.title} checklist={stories.checklist} details={stories.description} />
              )
            })}

          </div>
      
      </div>
    </>
  );
}

export default Stories;
