import React from 'react'
import Calculator from '../Calculator/Calculator'
import TodoList from './TodoList'

function ReactForm(){
    return(
        <>
        <div className="tools-container">
            <Calculator/>
            <TodoList />
        </div>
        </>
    )
}

export default ReactForm
