import React from 'react';
import '../style/tech.css'
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';


function IconNav() {


	return (
		<>
			<div className="icongroup"  >

				<a href="https://www.github.com/YingCG" target="_blank" rel="noreferrer">
					<FaGithub />
					<p className="icon-details">Github</p>
				</a>
				<a href="mailto:yingchiu@live.com">
					<MdEmail />
					<p className="icon-details">Email</p>
				</a>

				<a href="https://www.linkedin.com/in/yingchiu-goh/" target="_blank" rel="noreferrer">
					<FaLinkedin />
					<p className="icon-details">LinkedIn</p>
				</a>

			</div>
		</>
	)
}

export default IconNav