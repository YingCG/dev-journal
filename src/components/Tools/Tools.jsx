import React from 'react'
import Calculator from '../Calculator/Calculator'
import Header from '../Header/Header'
import TodoList from './TodoList'

function ReactForm(){
    return(
        <>
        <Header/>
        <div className="tools-container">
            <Calculator/>
            <TodoList />
        </div>
        </>
    )
}

export default ReactForm
