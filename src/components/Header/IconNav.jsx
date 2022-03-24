import React from 'react';
import '../style/socialmedia.css'
import { FaLinkedin, FaGithub} from 'react-icons/fa';
import { MdEmail} from 'react-icons/md';


function IconNav(){
    return (
        <>
					<a href="https://www.github.com/YingCG" target="_blank" rel="noreferrer">
						<FaGithub/>
						<span className="sr-only">Github</span>
					</a>

					<a href="https://www.linkedin.com/in/yingchiu-goh/" target="_blank" rel="noreferrer">
					<FaLinkedin/>
					<span className="sr-only">LinkedIn</span>
					</a>

					<a href="mailto:yingchiu@live.com">
						<MdEmail/>
						<span className="sr-only">Email</span>
					</a>
        </>
    )
}

export default IconNav