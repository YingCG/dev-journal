import React, { useState } from 'react'
import EventCalendar from './EventCalendar'
import { addMonths, subMonths } from 'date-fns'

const CalendarController = () => {
    const today = new Date()
    const [currentMoment, setCurrentMoment] = useState(today)
    const previousMonth = () => {
        setCurrentMoment((month) => {
            return subMonths(month, 1)
        })
    }
    const nextMonth = () => {
        setCurrentMoment((month) => {
            return addMonths(month, 1)
        })
    }


  return (
    <div>
        
      <EventCalendar currentMoment={currentMoment} onPre={previousMonth} onNext={nextMonth}/>
    </div>
  )
}

export default CalendarController
