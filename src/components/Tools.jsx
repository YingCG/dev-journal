import React from 'react'
import Calculator from './Calculator'
import TodoList from './TodoList'

function ReactForm(){
    return(
        <>
        <div className="Main-content">
            <Calculator/>
            <TodoList />
        </div>
        </>
    )
}

export default ReactForm
