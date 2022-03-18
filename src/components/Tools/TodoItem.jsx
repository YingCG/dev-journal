import React, { useState } from 'react'

function TodoItem(props){

    const [isDone, setIsDone] = useState(false)

    function crossOut(){
        setIsDone((finish) => {
            return !finish
        })
    }

    return (
        <div onClick={()=> {
            props.onChecked(props.id)
        }}>
            <li onClick={crossOut}>
                {props.text}
                <span> <button>Done</button></span>
                <span className='remove'><button> x </button></span>
            </li>
        </div>
    )
}

export default TodoItem;
