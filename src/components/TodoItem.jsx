import React, { useState } from 'react'

function TodoItem(props){

    // const [isDone, setIsDone] = useState(false)

    // function crossOut(){
    //     setIsDone((finish) => {
    //         return !finish
    //     })
    // }

    return (
        <div onClick={()=> {
            props.onChecked(props.id)
        }}>
            <li>
                {props.text}
            </li>
        </div>
    )
}

export default TodoItem;
