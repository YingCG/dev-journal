import React from 'react'

function Greeting(props) {
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
    customStyle.color = '#916BBF'
} else {
    greeting = 'Good Evening'
    customStyle.color = '#00ffc3'
}


    return (
        <>
        <div className='greeting' style={customStyle}>
        <h3>{greeting}! {props.greeting}</h3>
       
        </div>
        </>
    )
}

export default Greeting