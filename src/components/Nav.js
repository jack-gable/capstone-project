import React from "react";
import "../css/Nav.css";

function Nav() {
	return (
		<nav>
			<ul className="nav">
				<li>
					<a className="navLink" href="/">
						Home
					</a>
				</li>
				<li>
					<a className="navLink" href="/">
						About
					</a>
				</li>
				<li>
					<a className="navLink" href="/">
						Menu
					</a>
				</li>
				<li>
					<a className="navLink" href="/">
						Reservations
					</a>
				</li>
				<li>
					<a className="navLink" href="/">
						Online Order
					</a>
				</li>
				<li>
					<a className="navLink" href="/">
						Login
					</a>
				</li>
			</ul>
		</nav>
	);
}

export default Nav;
