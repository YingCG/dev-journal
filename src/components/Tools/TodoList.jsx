import React, { useState } from "react";
import TodoItem from "./TodoItem";
import '../style/tools.css'
import Nav from "../Header/Nav";
import { Link } from "react-router-dom";

function TodoList () {
    const [inputText, setInputText] = useState('')
    const [items, setItems] = useState([])

    function handleChange(event){
        const newInput = event.target.value
        setInputText(newInput)
    }

    function addItem(event){
        event.preventDefault()
        setItems((todos) => {
            return [...todos, inputText]
        })
        setInputText('')
    }

    function deleteTask(index) {
        setItems((todos) => {
            return todos.filter((_, i) => index !== i)
        })
    }

    return (
        <div className="todo" >
            <div>
                <Link to='/'><img className="logo" src="../images/YingCG.svg" alt="logo" style={{height: '50px'}}/></Link>
                <Nav/>
                <br/>
                <br/>
                <h1 >To-Do List</h1>
            </div>
            <div className="add-todo">
                <input name='todo' onChange={handleChange} type='text' placeholder="What's next?" 
                value={inputText}/>
            <button onClick={addItem}> <span>Add</span></button>
            </div>
            <div className='todo-list'>
                <ul>
                    {items.map((todoItem,index) => <TodoItem 
                        key={index} id={index} text={todoItem}
                        deleteItem={() => deleteTask(index)}
                    />
                    )}
                </ul>
            </div>
        </div>
    )
}

export default TodoList