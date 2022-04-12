import React, { useState } from 'react'

function DrawShape(props) {

    const shapeForm = { width: '', height: '', color: '' }
    const [shapeStyle, setShapeStyle] = useState(shapeForm)
    const [shapesList, setShapeList] = useState([{ width: 10, height: 10, color: "orange" }])

    function handleChange(event) {
        setShapeStyle({
            [event.target.name]: event.target.value
        })
    }


    function handleSubmit() {
        props.create((newShape)=>{
            setShapeStyle({
                shapes: [{width : newShape.width}, {height: newShape.height},{color : newShape.color}]
            })
        })
        setShapeList([...this.state.shapes, shapes])
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor='height'>Height</label>
                    <input type='text' name='height' value={shapeStyle.height} id='height' onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor='width'>Width</label>
                    <input type='text' name='width' value={shapeStyle.width} id='width' onChange={handleChange} />
                </div>
                <div>
                    <label>Color</label>
                    <input type='text' name='backgroundColor' value={shapeStyle.color} id='color' onChange={handleChange} />
                </div>
                <button>Add new shape</button>
            </form>
            {shapesList}
            <div className='newshape' style={shape}  ></div>
        </>
    )
}

export default DrawShape
