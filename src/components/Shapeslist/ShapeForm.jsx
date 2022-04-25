import React, { useState } from 'react'

function ShapeForm(props) {
    const [userInput, setUserInput] = useState({ height: '', width: '', color: '' })

    function handleChange(evt) {
        setUserInput({
            ...userInput,
            [evt.target.name]: evt.target.value
        })
    }

    function handleSubmit(evt) {
        evt.preventDefault()
        props.createShape(userInput)
        setUserInput({ height: '', width: '', color: '' })
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor='height'>Height</label>
                <input type='text' name='height' value={userInput.height} onChange={handleChange} id='height' />
            </div>
            <div>
                <label htmlFor='width'>Width</label>
                <input type='text' name='width' value={userInput.width} onChange={handleChange} id='width' />
            </div>
            <div>
                <label htmlFor='color'>Color</label>
                <input type='text' name='color' value={userInput.color} onChange={handleChange} id='color' />
            </div>
            <button>Add New Shape</button>
        </form>
    )
}

export default ShapeForm