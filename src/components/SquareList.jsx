import React, { useState } from 'react'
import Square from './Square';
import projects from '../data/projectroadmap';
import '../style/style.css'
import '../style/hello.css'
import '../style/squarelist.css'
import Greeting from './Greeting';


function SquareList() {
  const pallete = ['#E4EFE7', '#FFE194', '#D6E5FA', '#D4E2D4', '#D9D7F1', '#F3F1F5', '#7EB5A6', '#CEE5D0', '#EDF6E5', '#F0D9FF', '#F4F9F9', '#D3DEDC', '#E4D8DC', '#FEFBF3', '#93B5C6', '#F7F2E7', '#C9CCD5', '#FFFDDE', '#F0ECE3', '#CDF2CA', '#FFEFEF', '#FCF9EA', '#BADFDB', '#F8A978', '#FFC5A1', '#F3F8FF', '#DEECFF', '#C6CFFF', '#E8D3FF', '#B8DFD8'];
  const morningPallete = ['#FFF5E1', '#FFFAFA', '#F9ECEC', '#9AD0EC', '#FFFEB7', '#CDB699', '#FED1EF', '#A3E4DB', '#FBFFE2', '#EDD2F3', '#FBF8F1', '#C1DEAE']
  const afternoonPallete = ['#A3E4DB', '#FDEFF4', '#C9CBFF', '#EFEFEF', '#FFE162', '#F7DAD9', '#F4C7AB', '#1EAE98', '#E6DDC6', "#FFAFAF", '#E4FBFF', '#005792', '#F58634']
  const eveningPallete = ['#A3DDCB', '#FFE3DE', '#92A9BD', '#DBE6FD', '#77ACF1', '#E1F5F2', '#B4AEE8', '#F3F1F5', '#F0D9FF', '#BEAEE2', '#D3D5FD', '#C8F2EF']

  const [colors, setColors] = useState(getColorFromPalette())

  function getColorFromPalette() {

    const date = new Date();
    const currentTime = date.getHours()

    return currentTime < 12 ? morningPallete : (currentTime < 18 ? afternoonPallete : eveningPallete);
  }

  function changeColourPallete() {
    const newColors = [];

    for (let i = 0; i < 12; i++) {
      const newColor = pallete[Math.floor(Math.random() * pallete.length)];
      newColors.push(newColor)
    }

    setColors(newColors)
  }

  function changeOneColour(newColor, i) {
    colors[i] = newColor
    setColors([...colors])
  }

  return (
    <>
      <div className='two-column'>
        <div className="big-square" >
            <h1 style={{ fontSize: '2.5rem'}}> Projects Roadmap </h1>
            <Greeting greeting={'Welcome to my coding journal. '} style={{color: '#3D087B'}} /> 
              <p> Programming is a universe itself yet to discover... Here, I am tracking my growth as a developer.
                I am constantly learning and exploring the possibilities to approach problems.

                As a start, I will first using this <strong>Projects Roadmap</strong> to create and show the projects I have developed...
                Eventually I will tell you the full stories. Write down how and why I solved coding problems, and reveal hurdles in my workflow.
                <br/>
                <br/>
                <button className='nav-btn' onClick={changeColourPallete}><a>Change colour pallete</a></button>
              </p>
          </div>
          <div className='square-container'>
          {/* <div className="square-list"> */}
            {
              projects.map((info, index) => <Square key={index} colors={colors} index={index} info={info} updateColor={changeOneColour} />)
            }

            <div >
              <Square colors={colors} index={5} info={{
                title: "React State",
                description: "State is used with React Component Classes to make them dynamic.",
                links: []
              }} updateColor={changeOneColour} >

                <div className='pallete' >
                  <h6>You can  change the colour pallete of this page by clicking this button or clicking individual square color to change colour. </h6>
                </div>
              </Square>
            </div>

            <div>
              <Square colors={colors} index={6} info={{
                title: "React Form",
                description: " ",
                links: [{ title: "To-do List", url: "/projects/todolist", route: true }]
              }} updateColor={changeOneColour} >
              </Square>
            </div>
            <div>
              <Square colors={colors} index={7} info={{
                title: "useReducer()",
                description: "",
                links: [{ title: "Calculator", url: "/projects/calculator", route: true }]
              }} updateColor={changeOneColour} >
              </Square>
            </div>
          
            
            </div>
          </div>
    </>
  )
}

export default SquareList
