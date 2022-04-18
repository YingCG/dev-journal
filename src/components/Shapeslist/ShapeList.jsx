import React, { useState } from 'react'
import ShapeForm from './ShapeForm'
import Shape from './Shape'


function ShapeList() {
    const [shapes, setShapes] = useState([{id: 1, width: 10, height: 10, color: "orange" }]);

    function remove(id) {
        setShapes(shapes.filter(shape => shape.id !== id))
    }

    function create(newShape) {
        setShapes([...shapes,
        {
            ...newShape,
            id: shapes.length + 1
        }])
    }

    return (
        <div>
            <h1>Color Shape Maker</h1>
            <ShapeForm createShape={create} />
            {shapes.map(shape => (
                <Shape key={shape.id} id={shape.id} width={shape.width} height={shape.height} color={shape.color} removeShape={() => remove(shape.id)} />
            ))}
        </div>
    )
}

export default ShapeList
