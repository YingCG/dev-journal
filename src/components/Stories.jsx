import React from "react";
import storiesData from '../data/humanskills'
import Story from "./Story";

function Stories() {


  return (
    <>
      <div className="page-container">
          <h2>B.Y.O. Cup Corner</h2>
          <h3>Some human skills I practice to code along.</h3>
          <div className="stories square-list">
            {storiesData.map (stories => {
              return (
              <Story key={stories.id} title={stories.title} checklist={stories.checklist} description={stories.description} />
              )
            })}
          </div>
      
      </div>
    </>
  );
}

export default Stories;
