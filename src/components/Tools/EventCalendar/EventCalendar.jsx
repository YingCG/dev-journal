import React, { useState } from 'react'
import { addMonths, eachDayOfInterval, endOfMonth, format, getDay, startOfMonth, subMonths } from "date-fns";
import '../../style/calendar.css'
import { Activities } from './Activities';

const EventCalendar = () => {

    const WEEKDAYS = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const [ activities, setActivities] = useState([])
    const [inputText, setInputText] = useState('')

    const today = new Date()
    const firstDayOfMonth = startOfMonth(today)
    const lastDayOfMonth = endOfMonth(today)
    const daysInMonth = eachDayOfInterval({
        start: firstDayOfMonth, end: lastDayOfMonth
    })
    const [currentMoment, setCurrentMoment] = useState(today)
    const startingDayIndex = getDay(firstDayOfMonth)

    const previousMonth = () => {
        setCurrentMoment((month) => {
            return addMonths(month, 1)
        })
    }
    const nextMonth = () => {
        setCurrentMoment((month) => {
            return subMonths(month, 1)
        })
    }

    // function handleChange(event){
    //     const newInput = event.target.value
    //     setInputText(newInput)
    // }

    function addReminder (e)  {
        e.preventDefault() 
        console.log('click')
        setActivities((events) => {
            return [...events, inputText]
        })
        setInputText('')
    }

  return (
    <div className='calendar'>
        <div  className='grid-title'>
            <button className='small-btn' onClick={previousMonth}>Pre</button>
            <h2>{format(currentMoment,"MMMM yyyy")}</h2>
            <button className='small-btn' onClick={nextMonth}>Next</button>

        </div>
      <div className='grid-wrapper'> {WEEKDAYS.map((day) => {
        return <div key={day}>{day}</div>
      })}

      {Array.from({length: startingDayIndex}).map((_, index) => {
        return <div key={`empty-${index}`}/>
      })}

      {daysInMonth.map((day, index) => {
        return <div className={`grid-item ${today.getDate() === day.getDate() && today.getMonth() === day.getMonth()? 'current-day': ''}`} key={index} onClick={addReminder}>
            {format(day,"d")}
            <input  onClick={addReminder}/>

            <Activities activities={activities} inputs={inputText} />
        </div>
      })}</div>
    </div>
  )
}

export default EventCalendar
