import React from 'react'

function LightOut (){

    const [board, setBoard] = useState('')

    function LightOn(event) {
        console.log(event.target.value)
        setBoard(event.target.value)
    }

    // function createBoard(){
    //     let board =[]
    //     for (let y = 0; y < )
    // }

    return(
        <div className='board'>
            <h1>Light Out Game</h1>
            <div onChange={LightOn}>{board}</div>
        </div>
    )
}

export default LightOut