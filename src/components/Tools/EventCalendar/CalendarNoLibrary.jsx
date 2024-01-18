import React, { useState } from 'react';
import '../../style/calendar.css';

const VEventCalendar = () => {
  const WEEKDAYS = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const today = new Date();
  const [currentMoment, setCurrentMoment] = useState(today);

  const getDaysInMonth = (year, month) => {
    const firstDayOfMonth = new Date(year, month, 1);
    const lastDayOfMonth = new Date(year, month + 1, 0);
    const daysInMonth = [];

    for (let day = firstDayOfMonth; day <= lastDayOfMonth; day.setDate(day.getDate() + 1)) {
      daysInMonth.push(new Date(day));
    }

    return daysInMonth;
  };

  const startingDayIndex = new Date(currentMoment.getFullYear(), currentMoment.getMonth(), 1).getDay();

  const incrementMonth = () => {
    setCurrentMoment((prevMoment) => new Date(prevMoment.getFullYear(), prevMoment.getMonth() + 1, 1));
  };

  const decrementMonth = () => {
    setCurrentMoment((prevMoment) => new Date(prevMoment.getFullYear(), prevMoment.getMonth() - 1, 1));
  };

  return (
    <div>
      <h2>{`${currentMoment.toLocaleString('default', { month: 'long' })} ${currentMoment.getFullYear()}`}</h2>
      <button onClick={decrementMonth}>Pre</button>
      <button onClick={incrementMonth}>Next</button>
      <div className='grid-wrapper'>
        {WEEKDAYS.map((day) => (
          <div className='grid-title' key={day}>{day}</div>
        ))}

        {Array.from({ length: startingDayIndex }).map((_, index) => (
          <div key={`empty-${index}`} />
        ))}

        {getDaysInMonth(currentMoment.getFullYear(), currentMoment.getMonth()).map((day, index) => (
          <div
            className={`grid-item ${today.getDate() === day.getDate() ? 'current-day' : ''}`}
            key={index}
          >
            {day.getDate()}
          </div>
        ))}
      </div>
    </div>
  );
};

export default VEventCalendar;
