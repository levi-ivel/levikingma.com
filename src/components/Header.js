import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import AsciiName from "./AsciiName";

// Function to get the current time for my timezone (GMT+1) in a 12 hour format (AM/PM)
function Header() {
	const [time, setTime] = useState(""); 

	useEffect(() => {
		const interval = setInterval(() => {
		const now = new Date();
		setTime(now.toLocaleTimeString()); 
	}, 1000);
	
	return () => clearInterval(interval); 
}, []);

	return (
		<header>
		{/* Display the time output from the function */}
			<span className="time">It is currently {time} where I live</span>

			<div className="intro">

			{/* Short introduction */}
				<p>
				Levi Kingma <br/>
				📍Friesland, Netherlands📍 <br/>
				I'm a second-year Software Development student who likes making interesting things <br/>
				</p>
			</div>

		{/* Display the ASCII visual from the AsciiName.js file */}
			<div className="name">
				<AsciiName />
			</div>

		{/* Show social media and resume via icons that go to their respective platforms when clicked */}
			<div className="contact-links">
				<a href="https://github.com/levi-ivel" target="_blank" rel="noopener noreferrer" className="social-btn">
					<FontAwesomeIcon icon={faGithub} size="2x" />
				</a>
				<a href="https://www.linkedin.com/in/levi-kingma-36a317293/" target="_blank" rel="noopener noreferrer" className="social-btn">
					<FontAwesomeIcon icon={faLinkedin} size="2x" />
				</a>
				<a href="./assets/CV.pdf" target="_blank" className="social-btn">
					Download Resume
				</a>
				<a href="mailto:zakelijk@levikingma.com" className="social-btn">
					<FontAwesomeIcon icon={faEnvelope} size="2x" />
				</a>
				<a href="https://www.instagram.com/levi.kingma/" target="_blank" rel="noopener noreferrer" className="social-btn">
					<FontAwesomeIcon icon={faInstagram} size="2x" />
				</a>

			</div>
		</header>
	);
}

export default Header;
