import React from "react";
import eggPic from "../assets/desktop/image-transform.jpg";
import standOut from "../assets/desktop/image-stand-out.jpg";
import emily from "../assets/imgs/image-emily.jpg";
import thomas from "../assets/imgs/image-thomas.jpg";
import jennie from "../assets/imgs/image-jennie.jpg";
import milkBottles from "../assets/desktop/image-gallery-milkbottles.jpg";
import orange from "../assets/desktop/image-gallery-orange.jpg";
import cone from "../assets/desktop/image-gallery-cone.jpg";
import sugarCubes from "../assets/desktop/image-gallery-sugarcubes.jpg";
const Article = () => {
	return (
		<article>
			<section className="section">
				<div className="content-box">
					<h2>Transform your brand</h2>
					<p>
						We are a full-service creative agency specializing in
						helping brands grow fast. Engage your clients through
						compelling visuals that do most of the marketing for
						you.
					</p>
					<button>Learn More</button>
				</div>
				<img src={eggPic} className="section-img" alt="" />
			</section>
			<section className="section">
				<img src={standOut} className="section-img" alt="" />
				<div className="content-box">
					<h2>Stand out to the right audience</h2>
					<p>
						Using a collaborative formula of designers, researchers,
						photographers, videographers, and copywriters, we'll
						build and extend your brand in digital places.
					</p>
					<button>Learn More</button>
				</div>
			</section>
			<section className="section">
				<div id="apple">
					<h2>Graphic Design</h2>
					<p>
						Great design makes you memorable. We deliver artwork
						that underscores your brand message and capture
						potiential client's attention.
					</p>
				</div>
				<div id="orange">
					<h2>Photography</h2>
					<p>
						Increase your credibility by getting the most stunning,
						high-quality photos that improve your business image.
					</p>
				</div>
			</section>
			<section className="testimonials-section">
				<h2>Client Testimonials</h2>
				<div className="testimonials">
					<div>
						<img src={emily} className="img-fluid" alt="" />
						<p>
							We put our trust in Sunnyside and they delivered,
							making sure our needs were met and deadlines were
							always a hit.
						</p>
						<h5>Emily R.</h5>
						<span>marketing director</span>
					</div>
					<div>
						<img src={thomas} className="img-fluid" alt="" />
						<p>
							Sunnyside's enthusiasm coupled with their keen
							interest in our brand's success made it a satisfying
							and enjoyable experience.
						</p>
						<h5>Thomas S.</h5>
						<span>chief operating officer</span>
					</div>
					<div>
						<img src={jennie} className="img-fluid" alt="" />
						<p>
							Incredible end result! Our sales increased over 400%
							when we worked with Sunnyside. Highly recommended!
						</p>
						<h5>Jennie F.</h5>
						<span>business owner</span>
					</div>
				</div>
			</section>
			<section className="img-section">
				<img src={milkBottles} className="img-fluid" alt="" />

				<img src={orange} className="img-fluid" alt="" />

				<img src={cone} className="img-fluid" alt="" />

				<img src={sugarCubes} className="img-fluid" alt="" />
			</section>
		</article>
	);
};

export default Article;
