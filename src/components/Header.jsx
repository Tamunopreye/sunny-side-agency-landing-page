import React from "react";
import logo from "../assets/imgs/logo.svg";
import arrowDown from "../assets/imgs/icon-arrow-down.svg";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";

const Header = () => {
	const [click, setClick] = useState(false);
	const handleClick = () => setClick(!click);
	return (
		<header>
			<nav>
				<Link to="/">
					<img src={logo} className="logo" alt="" />
				</Link>
				<ul className={click ? "nav-menu active" : "nav-menu"}>
					<li className="nav-item">
						<Link to="/about" className="nav-link">
							About
						</Link>
					</li>
					<li className="nav-item">
						<Link to="/services" className="nav-link">
							Services
						</Link>
					</li>
					<li className="nav-item">
						<Link to="/projects" className="nav-link">
							Projects
						</Link>
					</li>
					<li className="nav-item">
						<Link to="/contact" className="nav-link">
							Contact
						</Link>
					</li>
				</ul>
				<div className="hamburger-menu" onClick={handleClick}>
					{click ? <FaTimes /> : <FaBars />}
				</div>
			</nav>
			<div className="header-content">
				<h1>We are creatives</h1>
				<img src={arrowDown} alt="" />
			</div>
		</header>
	);
};

export default Header;
