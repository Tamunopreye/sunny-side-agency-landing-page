import logo from "../assets/imgs/logo.svg";
import React from "react";

const Footer = () => {
	return (
		<footer>
			<img src={logo} alt="" />
			<ul>
				<li>About</li>
				<li>Services</li>
				<li>Projects</li>
			</ul>
			<ul>
				<li>FaceBook</li>
				<li>Twitter</li>
				<li>Instagram</li>
				<li>Pinterest</li>
			</ul>
		</footer>
	);
};

export default Footer;
