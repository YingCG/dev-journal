import React from 'react'
import {Link} from 'react-router-dom'


function SquareList () {

    function getColorFromPalette () {
      // const pallete = ['#E4EFE7','#D6E5FA', '#D4E2D4','#D9D7F1','#F3F1F5', '#7EB5A6', '#CEE5D0','#EDF6E5', '#F0D9FF','#F4F9F9','#D3DEDC', '#E4D8DC', '#FEFBF3','#93B5C6', '#F7F2E7', '#C9CCD5', '#FFFDDE', '#F0ECE3','#CDF2CA', '#FFEFEF']
      // return pallete[Math.floor(Math.random() * pallete.length)]

      const date = new Date();
      const currentTime = date.getHours()
      const morningPallete = ['#FFFAFA', '#F9F8EB', '#F9ECEC','#F0D9DA','#C8D9EB','#ECF2F9','#ADD2C9','#A3E4DB','#FBFFE2','#CEE5D0']
      const afternoonPallete = ['#DBD0C0', '#FAEEE0', '#F9E4C8','#F9CF93','#FFADAD','#EFEFEF','#FCD8D4','#FDF6F0','#F8E2CF','#F5C6AA']
      const eveningPallete = ['#A3DDCB', '#FFE3DE', '#D3DEDC','#92A9BD','#7C99AC','#B1D0E0','#C9CCD5','#D4ECDD','#F0D9FF','#F3F1F5']

      // if (currentTime < 12){
      //   return morningPallete;
      // } else if (currentTime < 18) {
      //   return afternoonPallete;
      // } else {
      //   return eveningPallete;
      // }

      return currentTime < 12 ? morningPallete : (currentTime < 18 ? afternoonPallete : eveningPallete);
    }

    const myColors = getColorFromPalette();
  
  return (
    <>
      <div className='square-list'>
      <div className='square' style={{backgroundColor: myColors[0]}}>
          UX design<br/><br/>
          <button className='btn'><a href='https://xd.adobe.com/view/5bee77bc-6104-48b2-b6ab-e0dbcecbaaf7-0ebd/'>Adobe XD</a></button>
          <button className='btn'><a href='https://www.figma.com/file/HlozULH29aHAGHduxfEeYC/Resource-Art?node-id=1%3A791'>Figma</a></button>
        </div>

        <div className='square' style={{backgroundColor: myColors[1]}}>
          HTML &amp; CSS Website  <br/><br/>
          <button className='btn'><a href='https://yingcg.github.io/EyeCandyCinema/' >Eye Candy Cinema</a></button>
          <button className='btn'><Link to='/projects/css' >My CSS Playground</Link></button>

        </div>

        <div className='square' style={{backgroundColor: myColors[2]}}>
          Javascript <br/><br/>
          <button className='btn'><a href='https://yingcg.github.io/blog/js-fundamentals.html'>JavaScript Basic</a></button>
          <button className='btn'><a href='https://yingcg.github.io/minesweeper/'>Minesweeper Game</a></button>
        </div>

        <div className='square' style={{backgroundColor: myColors[3]}}>
          HTML | CSS | JavaScript<br/><br/>
          <button className='btn'><a href='https://yingcg.github.io/retouchbarn/'>Retouch Barn</a></button>
        </div>

        <div className='square' style={{backgroundColor: myColors[4]}}>
          React App <br/><br/>
          <p>This is a web app that I build base on user experience research.</p>
          <button className='btn'><a href='http://photoimagecbd.herokuapp.com'>Photo Image CBD</a></button>
          <button className='btn'><Link to='/projects/photoimage' >About the project</Link></button>
        </div>

        <div className='square' style={{backgroundColor: myColors[5]}}>
          Templating language &amp; Express Router <br/><br/>
          <button className='btn'><a href='https://pupparazi-ying.herokuapp.com/puppies'>Pupparazzi</a></button>
        </div>

        <div className='square' style={{backgroundColor: myColors[6]}}>
          React Form with database
        </div>

        <div className='square' style={{backgroundColor: myColors[7]}}>
          API
        </div>

        <div className='square' style={{backgroundColor: myColors[8]}}>
        </div>

        <div className='square' style={{backgroundColor: myColors[9]}}>
        </div>

        
    {/* <button onClick={handleClick}>Change colour pallete</button> */}
      </div>
    </>
  )
}

export default SquareList
