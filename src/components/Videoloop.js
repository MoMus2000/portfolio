import React from 'react';
import './Videoloop.css'
import '../App.css'
import Footer from './Footer';
function Videoloop() {
	return (
		<div className= "video-container">
		<video src= '/videos/Abstract - 26011.mp4' autoPlay loop muted />
		<h1>
		<br/>
		Hi ! My name is Mustafa Muhammad. <br/>
		I'm  a computer science student at York University.<br/>
		Download my resume from the top to check out my skills <br/>
		or scroll down to contact me on my socials
		<br/>
		</h1>
		</div>
		)
}

export default Videoloop;