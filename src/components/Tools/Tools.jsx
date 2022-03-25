import React from 'react'
import Calculator from '../Calculator/Calculator'
import Header from '../Header/Header'
import TodoList from './TodoList'

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
