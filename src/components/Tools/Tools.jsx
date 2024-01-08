import React from 'react'
import Header from '../Header/Header'
import Calculator from './Calculator/Calculator'
import TodoList from './TodoList/TodoList'

function ReactForm(){
    return(
        <>
                    <div className='main-content'>
        <Header/>
        <div className="tools-container">
            <Calculator/>
            <TodoList />
        </div>
        </div>
        </>
    )
}

export default ReactForm
