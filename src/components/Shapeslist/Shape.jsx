import React from 'react'

function Shape(props) {
    return (
        <>
            <div style={{
                height: `${props.height}em`,
                width: `${props.width}em`,
                backgroundColor: props.color
            }} />
            <button onClick={props.removeShape}>x</button>
        </>
    )
}

export default Shape;