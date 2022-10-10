import React from "react";
import logo from "../assets/imgs/logo.svg";
import arrowDown from "../assets/imgs/icon-arrow-down.svg";
import { Link } from "react-router-dom";

const Header = () => {
	return (
		<header>
			<nav>
				<img src={logo} alt="" />
				<ul>
					<li>About</li>
					<li>Services</li>
					<li>Projects</li>
					<li>Contact</li>
				</ul>
			</nav>
			<div className="header-content">
				<h1>We are creatives</h1>
				<img src={arrowDown} alt="" />
			</div>
		</header>
	);
};

export default Header;
