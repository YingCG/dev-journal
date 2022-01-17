import React from "react";
import { useNavigate, useParams } from "react-router-dom";

function Project(){
    let navigate = useNavigate()
    let {title}  = useParams()

    return(
        <div>
            This is individual project page {' '} for {title}
            
            <button onClick ={()=> {
                navigate('/projects/:title')
            }}>
                {' '} back to view all Projects
            </button>
        </div>
    )
}

export default Project