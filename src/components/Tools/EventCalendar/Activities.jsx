import React from 'react'

export const Activities = ({activities, inputs}) => {


    
  return (
    <div className='make-notes' >{activities.map((activity, index) => {
        return(
        <ol>

            <ul key={index} inputs={inputs}>{activity}</ul>
        </ol> )
    })}</div>
  )
}
