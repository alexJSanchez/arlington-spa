import React from "react";

function Footer() {
	return (
		<div className="footer">
			<div className="footer-container">
				<button style={{ marginBottom: "30px" }} className="button-one">
					Schedule an appointment
				</button>
				<p>696 Dutchess Turnpike Poughkepsie, NY 12603</p>
				<p>845-345-9223</p>
				<h3>Store Hours</h3>
				<p>
					<span>Mon-Sat</span>: 10am-9pm
				</p>
				<p>
					<span>Sun</span>: 11am-730pm
				</p>
			</div>
		</div>
	);
}

export default Footer;
