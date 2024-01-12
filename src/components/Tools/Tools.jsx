import React from 'react'
import Header from '../Header/Header'
import Calculator from './Calculator/Calculator'
import TodoList from './TodoList/TodoList'
import EventCalendar from './EventCalendar/EventCalendar'

function ReactForm(){
    return(
        <>
                    <div className='main-content'>
        <Header/>
        <div className="tools-container">
            <Calculator/>
            <TodoList />
            <EventCalendar/>
        </div>
        </div>
        </>
    )
}

export default ReactForm
