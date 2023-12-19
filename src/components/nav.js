import React from "react";
import { Link } from "react-router-dom";

function Nav() {
	return (
		<div className="nav">
			<Link to="/">home</Link>
			<Link to="/contact">contact</Link>
		</div>
	);
}

export default Nav;
