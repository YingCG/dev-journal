import React from "react";
import RubUrban from '../../images/ruburban.jpg'
import RainfallResearch from '../../images/RainfallResearch.jpg'
import Idx from '../../images/IdxDesgin.png'

function CurrentProject() {


    return(
        <div className="wrapper">
        <div className='projects-header'>
            <h1 className="double-line">Currently I am working on...</h1>
        </div>
        <div className="case-study-container">
          <div className="case-study">
            <div className="project" >
            <a href="https://www.figma.com/proto/rl3I5zVuhiWcpQaIL93T7C/Rainfall-Research?node-id=0-1486&scaling=scale-down" target="_blank" rel="noreferrer">
              <img className='project-img' src={RainfallResearch} alt='Rainfall Research' width="100%" height="auto" />
            </a>
            <div className="case-title double-line" > Rainfall Analysis and Prediction</div>
            <p> Machine learning has revolutionized creative research practices, offering possibilities for combining technological and environmental knowledge into artistic creations.  This is a research about local rainfall in Auckland New Zealand while I am currently expanding my skills in data analysis, visualization, and machine learning techniques. </p>
          </div>
        </div>

        <div className="case-study">
          <div className="project">
            <a href="https://creativehendersonmassey.org.nz/portfolio_page/ruburban/" target="_blank" rel="noreferrer">
              <img className='project-img' src={RubUrban} alt='Rubbing on Sydmonds Street' width="100%" height="auto" />
            </a>
            <div className="case-title double-line"> 10-minutes Walk</div>
            <p> 10-minutes walk is a spin-off activity founded by RubUrban's. RubUrban is a fluid collective of artists led by Cath O’Brien, working with local communities to connect with their physical environments and one another through the process of walking together or alone. Using the process of frottage or rubbing they will work with local communities to create ‘urban prints’ of their local environments.</p>
          </div>
        </div>

        <div className="case-study">
          <div className="project">
            <a href="https://www.figma.com/proto/sULiBePRQ9qpQd3c1FTw20/Interaction-Design-Term1?node-id=626-87&starting-point-node-id=626%3A87&scaling=scale-down" target="_blank" rel="noreferrer">
              <img className='project-img' src={Idx} alt='Interaction Desgin Course Cover' width="100%" height="auto" />
            </a>
            <div className="case-title double-line">Course Design & Deliver</div>
            <p> As an IT Lecturer, I guide students through the world of technology with empathy, creativity, and authenticity. My focus is on
                creating a comfortable and engaging learning environment to make IT education accessible and enjoyable. Alongside teaching,
                I’m a Creative Web Designer and Developer with a keen interest in content creation.</p>
          </div>
        </div>

        </div>

      </div>
    )
}

export default CurrentProject