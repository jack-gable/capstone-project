import React from "react";
import "../css/Footer.css";

function Footer() {
	return (
		<footer className="footer">
			<img className="image" src="logo.svg" alt="logo" />
			<ul className="bottomNav">
				<li>
					<a href="/">Home</a>
				</li>
				<li>
					<a href="/">About</a>
				</li>
				<li>
					<a href="/">Menu</a>
				</li>
				<li>
					<a href="/">Reservations</a>
				</li>
				<li>
					<a href="/">Online Order</a>
				</li>
				<li>
					<a href="/">Login</a>
				</li>
			</ul>
			<ul className="contact">
				<li>address</li>
				<li>phone number</li>
				<li>email</li>
			</ul>
			<ul className="social">
				<li>address</li>
				<li>phone number</li>
				<li>email</li>
			</ul>
		</footer>
	);
}

export default Footer;
