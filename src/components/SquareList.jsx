import React, { useState } from 'react'
import RollDice from './RollDice';
import TodoList from './TodoList';
import Square from './Square';
import projects from '../data/projectroadmap';

function SquareList () {
  const pallete = ['#E4EFE7','#FFE194','#D6E5FA', '#D4E2D4','#D9D7F1','#F3F1F5', '#7EB5A6', '#CEE5D0','#EDF6E5', '#F0D9FF','#F4F9F9','#D3DEDC', '#E4D8DC', '#FEFBF3','#93B5C6', '#F7F2E7', '#C9CCD5', '#FFFDDE', '#F0ECE3','#CDF2CA', '#FFEFEF','#FCF9EA','#BADFDB', '#F8A978','#FFC5A1','#F3F8FF', '#DEECFF', '#C6CFFF', '#E8D3FF','#B8DFD8'];
  const morningPallete = [ '#FFF5E1','#FFFAFA', '#F9ECEC','#9AD0EC','#FFFEB7','#CDB699','#FED1EF','#A3E4DB','#FBFFE2','#EDD2F3','#FBF8F1', '#C1DEAE']
  const afternoonPallete = ['#88E0EF','#FFADAD','#FFE162','#EFEFEF','#FFB085','#F2FFE9','#CDF2CA','#FFFDE8','#E6DDC6','#FDFFBC','#F5C6AA']
  const eveningPallete = ['#A3DDCB', '#FFE3DE', '#66BFBF','#DBE6FD','#77ACF1','#E1F5F2','#B4AEE8','#F3F1F5','#F0D9FF','#BEAEE2','#D3D5FD']

  const [colors, setColors] = useState(getColorFromPalette())

    function getColorFromPalette () {

      const date = new Date();
      const currentTime = date.getHours()


      return currentTime < 12 ? morningPallete : (currentTime < 18 ? afternoonPallete : eveningPallete);
    }

  
    function changeColourPallete(){
      const newColors = [];

      for (let i = 0; i < 12; i++){
        const newColor = pallete[Math.floor(Math.random() * pallete.length)];
        newColors.push(newColor)
      }

      setColors(newColors)
    }

    function changeOneColour(newColor, i){
      colors[i] = newColor
      setColors([...colors])
    }

  return (
    <>
      <div className='square-list'>

        {
          projects.map((info, index) => <Square key={index} colors={colors} index={index} info={info} updateColor={changeOneColour}/>)
        }
       

        <div className='square' style={{backgroundColor: colors[6]}} >
          React State 
          <p>State is used with React Component Classes to make them dynamic.</p><br/>
          <div className='pallete'>
          <h6>You can  change the colour pallete of this page by clicking this button or clicking individual square color to change colour. </h6>
          <button className='pallete-btn' onClick={changeColourPallete}><a>Change colour pallete</a></button> 
          </div>
          {/* <RollDice/><br/> */}
        </div>

        <div className='square' style={{backgroundColor: colors[7]}}>
        React Form<br/>
        </div>

        <div className='square' style={{backgroundColor: colors[8]}}>
        Client side Routing <br/>
        </div>

        <div className='square' style={{backgroundColor: colors[9]}}>
        API
        </div>
       
        <div className='square' style={{backgroundColor: colors[10]}}>
        Database
        </div>
        
        <div className='square' style={{backgroundColor: colors[11]}}>
        Full-stack App
        </div>

        
      </div>
    </>
  )
}

export default SquareList
