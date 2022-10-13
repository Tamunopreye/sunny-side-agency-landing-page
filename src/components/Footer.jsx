import logo from "../assets/imgs/logo.svg";
import React from "react";
import {
	FaFacebookSquare,
	FaInstagram,
	FaTwitter,
	FaPinterest,
} from "react-icons/fa";
const Footer = () => {
	return (
		<footer className="footer">
			<h3>sunnyside</h3>
			<ul className="footer-link">
				<li>About</li>
				<li>Services</li>
				<li>Projects</li>
			</ul>
			<ul className="socials">
				<li>
					<FaFacebookSquare />
				</li>
				<li>
					<FaTwitter />
				</li>
				<li>
					<FaInstagram />
				</li>
				<li>
					<FaPinterest />
				</li>
			</ul>
		</footer>
	);
};

export default Footer;
