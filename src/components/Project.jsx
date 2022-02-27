import React from "react";


function Project(){


    return(
        <div className="projects">
            <h1 className="double-line">Some project I created.</h1>
        <div className="case-study-container">
          <div className="case-study">
            <div className="project" >
            <a href="https://yingcg.github.io/EyeCandyCinema/" target="_blank" rel="noreferrer">
              <img className='project-img' src='/images/EyeCandyCinema.png' alt='website interface'  width="100%" height="auto"/>
              {/* <iframe title='HTML | CSS' src="https://yingcg.github.io/EyeCandyCinema/" width="100%" height="300" /> */}
              </a>
            <div className="case-title double-line" >Eye Candy Cinema</div>
            </div>
          </div>
          <div className="case-study">
            <div className="project">
            <a href="https://yingcg.github.io/retouchbarn/" target="_blank" rel="noreferrer">
            <img className='project-img' src='/images/RetouchBarn.png' alt='website interface'  width="100%" height="auto"/>
              </a>
            <div className="case-title double-line">Retouch Barn</div>
         </div>
          </div>
          <div className="case-study">
            <div className="project">
            <a href="http://photoimagecbd.herokuapp.com/" target="_blank" rel="noreferrer">
            <img className='project-img' src='/images/photoImage.png' alt='website interface'  width="100%" height="auto"/>
            </a>
            <div className="case-title double-line">Photo Image</div>
              </div>
          </div>
        </div>
        </div>

    )
}

export default Project