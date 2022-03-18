import React from 'react'
import Typewriter from './Typewriter';

function Greeting(props) {
const date = new Date();
const currentTime = date.getHours()

let greeting;
const customStyle = {
    color: ''
}

if (currentTime < 12){
    greeting = 'Good Morning'
    customStyle.color = '#FDFFA9'
} else if (currentTime < 18) {
    greeting = 'Good Afternoon'
    customStyle.color = '#FFD365'
} else if (currentTime > 20){
    greeting = 'Good Night'
    customStyle.color = '#086E7D'
} else {
    greeting = 'Good Evening'
    customStyle.color = '#5902EC'
}


    return (
        <>
        <div className='greeting' style={customStyle}>
        <h4><Typewriter message={greeting + "! " + props.greeting}/></h4>
       
        </div>
        </>
    )
}

export default Greeting