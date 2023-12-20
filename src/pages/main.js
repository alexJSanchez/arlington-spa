import React from "react";
import image from "../images/oil.jpg";
import commonArea from "../images/commonAreaSmall.jpg";
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
			<div className="service-container">
				<div className="service-box">
					<div>
						<img src={image} className="circular-image" />
						<p>Body Work</p>
					</div>
					<div className="service-box-price">
						<p>Swedish(30min/60min/90min)</p>
						<p>$35/$60/$90</p>
						<p>DeepTissue(30min/60min/90min)</p>
						<p>$40/$70/$90</p>
					</div>
				</div>
				<div className="service-box">
					<div>
						<img src={commonArea} className="circular-image" />
						<p>Chair Relaxing</p>
					</div>
					<div className="service-box-price">
						<p>Time(10min/15min/20min/30min)</p>
						<p>$15/$20/$25/$35</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Main;
