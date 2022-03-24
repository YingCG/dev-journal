import React, { useEffect, useState } from 'react'

function Typewriter({message}){
    const [text, setText] = useState("")
    const [progress, setProgress] = useState(0)

    useEffect(
        () => {
            const timer = setInterval(() => {
                const newIndex = progress + 1 > message.length + 30 ? 0 : progress + 1
                setProgress(newIndex)
                if (newIndex > message.length){
                    setText(message)
                } else {
                    setText(message.substring(0, progress))
                }
            }, 100);

            return () => clearInterval(timer)
        }
    )

    return (
        <>
        <h3 className='message' >{text}&nbsp;</h3>
        </>
    )
}

export default Typewriter

