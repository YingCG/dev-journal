import React from 'react'

function Footer() {

    const currentYear = new Date().getFullYear
    return (
        <>
            <div className='footer'>Copyright @ Curious Earthworm {currentYear} </div>
        </>
    )
}

export default Footer