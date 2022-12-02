import React,{ useState }  from 'react';
import Header from '../Header/Header';
import ShapeForm from './ShapeForm';
import ShapesList from './ShapesList';

function TimedShapes () {
    const [shapes, setShapes] = useState([{ id: 1, width: 10, height: 10, color: "pink", borderRadius: '50%'}])

    function create(newShape){
        setShapes([...shapes, 
            {
                ...newShape, 
                id: shapes.length +1
            }])
    }

        return (
            <>
            <Header />
            <div className='timed-shapes'>
                <ShapeForm createShape={create} />
                <ShapesList setShapes={setShapes} shapes={shapes}/>
            </div>
            </>
        )
    }

export default TimedShapes