import React from "react";
import logo from "../assets/imgs/logo.svg";
import arrowDown from "../assets/imgs/icon-arrow-down.svg";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

const Header = () => {
	return (
		<header className="pt-4">
			<Container>
				<nav>
					<Row>
						<Col>
							<img src={logo} alt="" />
						</Col>
						<Col></Col>
					</Row>
				</nav>
				<div className="header-content">
					<h1>We are creatives</h1>
					<img src={arrowDown} alt="" />
				</div>
			</Container>
		</header>
	);
};

export default Header;
