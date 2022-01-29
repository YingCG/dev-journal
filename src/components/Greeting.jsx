import React from 'react'

function Greeting() {
const date = new Date();
const currentTime = date.getHours()

let greeting;
const customStyle = {
    color: ''
}

if (currentTime < 12){
    greeting = 'Good Morning'
    customStyle.color = '#ffb300'
} else if (currentTime < 18) {
    greeting = 'Good Afternoon'
    customStyle.color = '#ED0BFF'
} else if (currentTime > 20){
    greeting = 'Good Night'
    customStyle.color = '#8400ff'
} else {
    greeting = 'Good Evening'
    customStyle.color = '#00ffc3'
}


    return (
        <>
        <div className='greeting' style={customStyle}>
        <h3>{greeting}! Welcome to my coding journal.</h3>
       
        </div>
        </>
    )
}

export default Greeting