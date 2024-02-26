import React from "react";
import RubUrban from '../../images/ruburban.jpg'
import RainfallResearch from '../../images/RainfallResearch.jpg'
import Rechart from '../../images/datavisualization-rechart.png'

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
              <img className='project-img' src={RainfallResearch} alt='Rainfall Research' width="100%" height="275px" />
            </a>
            <div className="case-title double-line" > Rainfall Analysis and Prediction</div>
            <p> Machine learning has revolutionized creative research practices, offering possibilities for combining technological and environmental knowledge into artistic creations.  This is a research about local rainfall in Auckland New Zealand while I am currently expanding my skills in data analysis, visualization, and machine learning techniques. </p>
          </div>
        </div>

        <div className="case-study">
          <div className="project">
            <a href="https://www.figma.com/proto/QEfHbcqgqpfZ2fwQNBB9I8/10-minute-walks?type=design&node-id=2-30&t=1yNFviShbpIbnk8L-0&scaling=scale-down&page-id=0%3A1&starting-point-node-id=2%3A30" target="_blank" rel="noreferrer">
              <img className='project-img' src={RubUrban} alt='Rubbing on Sydmonds Street' width="100%" height="275px" />
            </a>
            <div className="case-title double-line"> 10-minutes Walk</div>
            <p> 10-minutes walk is a spin-off activity founded by RubUrban's. RubUrban is a fluid collective of artists led by Cath O’Brien, working with local communities to connect with their physical environments and one another through the process of walking together or alone. Using the process of frottage or rubbing they will work with local communities to create ‘urban prints’ of their local environments.</p>
          </div>
        </div>

        <div className="case-study">
          <div className="project">
            <a href="https://dashboard-recharts-n9fn1qol3-yingcg.vercel.app/" target="_blank" rel="noreferrer">
              <img className='project-img' src={Rechart} alt='Interaction Desgin Course Cover' width="100%" height="275px" />
            </a>
            <div className="case-title double-line">Data Visualization</div>
            <p> Reconizing data visualization is an important aspect of the modern apps. In this project, I'm experimenting with displaying data using Rechart. This package, similar to Matplotlib or Seaborn in the context of Pandas (Python), allows us to acquire interactive insights from data, making it easy to create essential dashboard elements such as line charts, plots, and bars with an interactive experience.</p>
          </div>
        </div>

        </div>

      </div>
    )
}

export default CurrentProject