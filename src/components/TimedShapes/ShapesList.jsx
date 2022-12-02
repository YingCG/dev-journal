import React from 'react'
import Shape from "./Shape"
import '../style/shapesGallery.css'

// import ShapeForm from './ShapeForm';

function ShapesList (props) {
    // const [shapes, setShapes] = useState([{ id: 1, width: 10, height: 10, color: "orange"}])
    
    function remove(id){
        props.setShapes(props.shapes.filter(shape => shape.id !== id))
    }

    // function create(newShape){
    //     setShapes([...shapes, 
    //         {
    //             ...newShape, 
    //             id: shapes.length +1
    //         }])
    // }
       
        return (
            <div className='shapes-list'>
                <h1>Shapes Show</h1>
                {/* <ShapeForm createShape={create}/> */}
                <div className='shapes-gallery'>
                {props.shapes.map(shape => (
                    <Shape key={shape.id} id={shape.id} width={shape.width} height={shape.height} color={shape.color} borderRadius={shape.borderRadius} />
                ))}
                </div>
            </div>
        )
    }

export default ShapesList
