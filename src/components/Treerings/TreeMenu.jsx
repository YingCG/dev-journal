<<<<<<< HEAD
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
||||||| 78864c9a
import React, { useState }  from 'react'
import "../style/treerings.css";
import treemenu from '../../data/treemenu.js'
import Story from '../Stories/Story';


function TreeMenu() {

    const [contents, setContents] = useState('')


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
=======
import React, { useState }  from 'react'
import "../style/treerings.css";
import treemenu from '../../data/treemenu.js'
import Story from '../Stories/Story';


function TreeMenu() {

    const [contents, setContents] = useState('')


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
>>>>>>> f88c38d20d91b29fae700dd0cca6f710d87cfa8e
