import React from 'react'
import "../style/treerings.css";
import treemenu from '../../data/treemenu.js'
import Story from '../Stories/Story';


function TreeMenu() {


  return (
    <>
    <div className='tree-list'>
            <div className="tree-buttons">
            {treemenu.map (stories => {
              return (
              <Story key={stories.id} title={stories.title} description={stories.description} />
              )
            })}

          </div>
          </div>     </>
  );
}

export default TreeMenu;
