import React, { useState }  from 'react'
import "../style/treerings.css";
import treemenu from '../../data/treemenu.js'
import Story from '../Stories/Story';


function TreeMenu() {

    const [contents, setContents] = useState('')


  return (
    <>
    <div className='tree-list'>
            <button className="tree-buttons">
            {treemenu.map (button => {
              return (
              <Story key={button.id} title={button.title} />
              )
            })}

          </button>
          </div>     </>
  );
}

export default TreeMenu;
