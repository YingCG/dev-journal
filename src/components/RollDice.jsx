import React, { useState } from 'react';
import Dice from './Dice'

function RollDice (){
    const sides = ['one', 'two', 'three', 'four', 'five', 'six']
    const defaultDraw = sides[5]
    const [diceFace, setDiceFace] = useState(defaultDraw)

    const handleClick = () => {
        const newDraw = sides[Math.floor(Math.random() * sides.length)];
        setDiceFace(newDraw);
    };

    return (
        <>
        <div className='diceContainer'>
            <Dice side={diceFace} /> <br/>
            <button className='dice-btn' onClick={handleClick}>Roll Dice</button>
        </div>
        </>
    )
}

export default RollDice