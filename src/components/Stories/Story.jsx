import React, {useState} from "react";

function Story (props) {

    function storyStyle() {
        const pallete = ['#FCF9EA','#BADFDB', '#F8A978','#FFC5A1','#F3F8FF', '#DEECFF', '#C6CFFF', '#E8D3FF']
        return pallete[Math.floor(Math.random() * pallete.length)]
      }

    const [checked, setChecked] = useState(false)

    
      
    return (
        <>
            <div className="square" style={{ backgroundColor: storyStyle() }} >
                <h4> {props.title} </h4>
                <p>{props.description}</p>
                {/* <form className="checklist" key={props.id}>
                    <p>
                        {props.checklist.map(checklistItem => {
                            return (
                                <div key={checklistItem.id}>
                                    <input type='checkbox' checked={checked} /> 
                                    <span>{checklistItem.content}</span>
                                </div>
                        )
                        })}
                    </p>
                </form> */}
                <button > More</button>
            </div>
        </>
    )
}

export default Story