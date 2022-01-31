import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import Dice from './Dice';
import RollDice from './RollDice';

function SquareList () {

  const pallete = ['#E4EFE7','#D6E5FA', '#D4E2D4','#D9D7F1','#F3F1F5', '#7EB5A6', '#CEE5D0','#EDF6E5', '#F0D9FF','#F4F9F9','#D3DEDC', '#E4D8DC', '#FEFBF3','#93B5C6', '#F7F2E7', '#C9CCD5', '#FFFDDE', '#F0ECE3','#CDF2CA', '#FFEFEF']
  // return pallete[Math.floor(Math.random() * pallete.length)]
  

  const morningPallete = [ '#FFF5E1','#FFFAFA', '#F9ECEC','#9AD0EC','#FFFEB7','#EDFFA9','#FED1EF','#A3E4DB','#FBFFE2','#EDD2F3']
  const afternoonPallete = ['#88E0EF','#FFA1C9','#FFE162','#FDA65D','#FFE194','#F2FFE9','#CDF2CA','#FFFDE8','#FFF7AE','#FDFFBC','#F5C6AA']
  const eveningPallete = ['#A3DDCB', '#FFE3DE', '#66BFBF','#DBE6FD','#77ACF1','#E1F5F2','#B4AEE8','#F3F1F5','#F0D9FF','#BEAEE2','#D3D5FD']
  
  const [colors, setColors] = useState(getColorFromPalette())
  
  function getColorFromPalette () {  
    const date = new Date();
    const currentTime = date.getHours()
    return currentTime < 12 ? morningPallete : (currentTime < 18 ? afternoonPallete : eveningPallete);
  }

    const myColors = getColorFromPalette();
  
  return (
    <>
      <div className='square-list'>
      <div className='square' style={{backgroundColor: myColors[0]}}>
          UX design<br/><br/>
          <button className='btn'><a href='https://xd.adobe.com/view/5bee77bc-6104-48b2-b6ab-e0dbcecbaaf7-0ebd/' >Adobe XD</a></button>
          <button className='btn'><a href='https://www.figma.com/file/HlozULH29aHAGHduxfEeYC/Resource-Art?node-id=1%3A791'>Figma</a></button>
        </div>

        <div className='square' style={{backgroundColor: myColors[1]}}>
          HTML &amp; CSS Website  <br/><br/>
          <button className='btn'><a href='https://yingcg.github.io/EyeCandyCinema/' target='blank'>Eye Candy Cinema</a></button>
          <button className='btn'><Link to='/projects/css' >My CSS Playground</Link></button>

        </div>

        <div className='square' style={{backgroundColor: myColors[2]}}>
          Javascript <br/><br/>
          <button className='btn'><a href='https://yingcg.github.io/blog/js-fundamentals.html' target='blank'>JavaScript Basic</a></button>
          <button className='btn'><a href='https://yingcg.github.io/minesweeper/' target='blank'>Minesweeper Game</a></button>
        </div>

        <div className='square' style={{backgroundColor: myColors[3]}}>
          HTML | CSS | JavaScript<br/><br/>
          <button className='btn'><a href='https://yingcg.github.io/retouchbarn/' target='blank'>Retouch Barn</a></button>
        </div>

        <div className='square' style={{backgroundColor: myColors[4]}}>
          React App <br/><br/>
          {/* <p>This is a web app that I build base on user experience research.</p> */}
          <button className='btn'><a href='http://photoimagecbd.herokuapp.com' target='blank'>Photo Image CBD</a></button><br/>
          {/* <button className='btn'><Link to='/projects/photoimage' >About the project</Link></button> */}
          <br/>
          {/* 
          <button className='btn'><a href='http://photoimagecbd.herokuapp.com' target='blank'>Vending Machine</a></button><br/> */}
        </div>

        <div className='square' style={{backgroundColor: myColors[5]}}>
          Templating language<br/>
          Express Router<br/>
          <br/>
          <button className='btn'><a href='https://pupparazi-ying.herokuapp.com/puppies' target='blank'>Pupparazzi</a></button>
        </div>

        <div className='square' style={{backgroundColor: myColors[6]}}>
          React State <br/>
          React Form
          <RollDice/><br/>
        </div>

        <div className='square' style={{backgroundColor: myColors[7]}}>
        Client side Routing <br/>
        </div>

        <div className='square' style={{backgroundColor: myColors[8]}}>
        API
        </div>

        <div className='square' style={{backgroundColor: myColors[9]}}>
        Database
        </div>

        
    {/* <button onClick={handleClick}>Change colour pallete</button> */}
      </div>
    </>
  )
}

export default SquareList
