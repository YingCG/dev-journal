import React from 'react'
import Header from '../Header/Header'
import Calculator from './Calculator/Calculator'
import TodoList from './TodoList/TodoList'
import CalendarController from './EventCalendar/CalendarController'
import '../style/style.css'
import '../style/calendar.css'

function ReactForm(){
    return(
        <>
        <div className='main-content'>
        <Header/>
        <div className="tools-container">
            <Calculator/>
            <TodoList />
        </div>
            <CalendarController/>
        </div>
        </>
    )
}

export default ReactForm
