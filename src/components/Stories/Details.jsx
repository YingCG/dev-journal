import React from 'react'
import {Link} from 'react-router-dom'
import storiesData from '../../data/humanskills'
import Story from './Story'

function Details (props) {
    return (
        <>
        <div className='page-container'>
            {storiesData.map (details => {
              return (
              <Story details={props.description} />
              )
            })}
            <Link to='stories'>Hide Details</Link>
            </div>
        </>
    )
}

export default Details