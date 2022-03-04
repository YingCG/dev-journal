import React, { useState } from "react";
import TodoItem from "./TodoItem";

function TodoList () {
    const [inputText, setInputText] = useState('')
    const [tasks, setTasks] = useState([])

    function handleChange(event){
        const newInput = event.target.value
        setInputText(newInput)
    }

    function addItem(){
        setTasks((prevItems) => {
            return [...prevItems, inputText]
        })
        setInputText('')
    }

    function deleteItem(id){
        setTasks((prevItems) => {
            return prevItems.filter(
                (item, index) => {
                    return index !== id;
                }
            )
        })
    }


    return (
        <div className="todo-list">
            <h1>To-Do List</h1>
            <div>
                <input name='todo' onChange={handleChange} type='text' placeholder="What's next?" 
                value={inputText}/>
            <button onClick={addItem}> <span>Add</span></button>
            </div>
            <div className='todo'>
                <ul>
                    {tasks.map((todoItem,index) => <TodoItem 
                        key={index} id={index} text={todoItem}
                        onCheck={deleteItem}
                    />
                    )}
                </ul>
            </div>
        </div>
    )
}

export default TodoList