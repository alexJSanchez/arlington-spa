import React from "react";
import image from "../images/oil.jpg";
function Main() {
	return (
		<div className="main">
			<div className="image-container">
				<div className="gradient-overlay"></div>
				<div className="header-content">
					<div>
						<h1>Arlington footspa</h1>
						<p>696 Dutchess turnpike poughkepsie, ny 12603</p>
						<p>845-345-9223</p>
						<h3>Store Hours</h3>
						<p>
							<span>Mon-Sat</span>: 10am-9pm
						</p>
						<p>
							<span>Sun</span>: 11am-730pm
						</p>
						<span>AmericanExpress</span>
						<span>mastercard</span>
						<span>Visa</span>
						<span>Discover</span>
					</div>
				</div>
			</div>
			<div>
				<img src={image} className="circular-image" />
			</div>
		</div>
	);
}

export default Main;
