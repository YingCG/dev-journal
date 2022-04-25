import React from 'react';
import ShapeList from './ShapeList';
import Header from '../Header/Header';
import '../style/timedshapes.css'


function TimedShapes() {
    return (
        <div>
            <Header />
            <div className="timed-shapes">
                <div className="shape-form">
                    <ShapeList />
                </div>
                <div className="shape-gallery">
                </div>
            </div>
        </div>
    )
}

export default TimedShapes