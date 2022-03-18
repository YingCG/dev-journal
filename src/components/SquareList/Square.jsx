import React from 'react'
import { Link } from 'react-router-dom';

function Square(props) {
    const {children} = props
    const pallete = ['#E4EFE7','#D6E5FA', '#D4E2D4','#D9D7F1','#F3F1F5', '#7EB5A6', '#CEE5D0','#EDF6E5', '#F0D9FF','#F4F9F9','#D3DEDC', '#E4D8DC', '#FEFBF3','#93B5C6', '#F7F2E7', '#C9CCD5', '#FFFDDE', '#F0ECE3','#CDF2CA', '#FFEFEF','#FCF9EA','#BADFDB', '#F8A978','#FFC5A1','#F3F8FF', '#DEECFF', '#C6CFFF', '#E8D3FF'];

    function changeColor() {
        const newColor = pallete[Math.floor(Math.random() * pallete.length)]; 
        props.updateColor(newColor, props.index)
    }

    return (
    <div className='oneSquare' style={{ backgroundColor: props.colors[props.index] }} onClick={changeColor}>
        <h3>{props.info.title}</h3>
        <p>{props.info.description}</p><br />
        {
            props.info.links.map((link, index) =>
                <button className='btn'>
                    {link.route 
                    ? <Link key={index} to={link.url}>{link.title}</Link> 
                    : <a key={index} href={link.url}>{link.title} </a>}
                </button>
                )
        }
        {children}
    </div>);
}

export default Square
