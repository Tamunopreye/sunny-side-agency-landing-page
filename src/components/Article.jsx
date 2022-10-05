import React from "react";
import { Row, Col, Button } from "react-bootstrap";
import eggPic from "../assets/desktop/image-transform.jpg";
import standOut from "../assets/desktop/image-stand-out.jpg";
const Article = () => {
	return (
		<article>
			<section>
				<Row>
					<Col md className="content-box">
						<h2>
							Transform your <br /> brand
						</h2>
						<p>
							We are a full-service creative agency specializing
							in helping brands grow fast. Engage your clients
							through compelling visuals that do most of the
							marketing for you.
						</p>
						<Button>Learn More</Button>
					</Col>
					<Col md className="img-container">
						<img src={eggPic} className="img-fluid" alt="" />
					</Col>
				</Row>
			</section>
			<section>
				<Row>
					<Col>
						<img src={standOut} className="img-fluid" alt="" />
					</Col>
					<Col className="content-box">
						<h2>Stand out to the right audience</h2>
						<p>
							Using a collaborative formula of designers,
							researchers, photographers, videographers, and
							copywriters, we'll build and extend your brand in
							digital places.
						</p>
						<Button>Learn More</Button>
					</Col>
				</Row>
			</section>
		</article>
	);
};

export default Article;
