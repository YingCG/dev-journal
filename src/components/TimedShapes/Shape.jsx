import React from 'react'

function Shape (props) {
        return (
            <div>
            <div style={{
                height: `${props.height}em`,
                width: `${props.width}em`,
                backgroundColor: props.color,
                borderRadius: `${props.borderRadius}%`,
                // scale: `${props.transform.scale()}`,
                // rotate: `${props.transform.rotate()}`,
                // speed: `${props.transition}s`
            }}/>
            <button className='remove-btn' onClick={props.removeShape}>x</button>
            </div>
        )
    }

export default Shape;