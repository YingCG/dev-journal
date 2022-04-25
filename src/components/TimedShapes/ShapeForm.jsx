import React, { useState } from 'react'

function ShapeForm (props) {
    const [userInput, setUserInput] = useState({height: '', width: '', color: '', borderRadius: ''})

    function handleChange(evt) {
        setUserInput({
            ...userInput,
            [evt.target.name] : evt.target.value
        })
    }

    function handleSubmit(evt){
        evt.preventDefault()
        props.createShape(userInput)
        setUserInput({height: '', width: '', color: '', borderRadius: ''})
    }

        return (
           <form className='shape-form' onSubmit={handleSubmit}>
                <h3>Color Shape Maker</h3>

               <div>
                   <label htmlFor='height'>Height</label>
                   <input type='text' name='height' value={userInput.height} onChange={handleChange} id='height'/>
               </div>
               <div>
                   <label htmlFor='width'>Width</label>
                   <input type='text' name='width' value={userInput.width} onChange={handleChange} id='width'/>
               </div>
               <div>
                   <label htmlFor='color'>Color</label>
                   <input type='text' name='color' value={userInput.color} onChange={handleChange} id='color'/>
               </div>
               <div>
                   <label htmlFor='borderRadius'>Curve</label>
                   <input type='text' name='borderRadius' value={userInput.borderRadius} onChange={handleChange} id='borderRadius'/>
               </div>
               
               {/* <br/> */}

               {/* <h3>Shape Animation</h3>

               <div>
                   <label htmlFor='scale'>Scale</label>
                   <input type='text' name='scale' value={userInput.grow} onChange={handleChange} id='scale'/>
               </div>
               <div>
                   <label htmlFor='rotate'>Rotate</label>
                   <input type='text' name='rotate' value={userInput.rotate} onChange={handleChange} id='rotate'/>
               </div>
               <div>
                   <label htmlFor='speed'>Speed</label>
                   <input type='text' name='speed' value={userInput.speed} onChange={handleChange} id='speed'/>
               </div> */}
               <br/>
               <button className='btn'>Add New Shape</button>
           </form>
        )
    }

export default ShapeForm