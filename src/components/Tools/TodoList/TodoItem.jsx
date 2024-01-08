import React, { useState } from 'react'

function TodoItem(props){
    const [isDone, setIsDone] = useState(false)

    function crossOut(){
        setIsDone((finish) => {
            return !finish
        })
    }

    return (
        <div >
            <li className='todo-item' style={{textDecoration: isDone? 'line-through': 'none'}} >
                {props.text}
                <span className='todo-item' > <button onClick={crossOut}>Done</button></span>
                <span className='todo-item' ><button onClick={() => props.deleteItem(props)}> Delete </button></span>
            </li>
        </div>
    )
}

export default TodoItem;
