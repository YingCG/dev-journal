import React from 'react'

function Footer() {

    const currentYear = new Date().getFullYear
    return (
        <>
            <h6 className='footer'>Copyright @ Curious Earthworm {currentYear} </h6>

        </>
    )
}

export default Footer