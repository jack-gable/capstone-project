import React from "react";
import "../css/Footer.css";
import { NavLink } from "react-router-dom";
import { Flex } from "@chakra-ui/react";

function Footer() {
	return (
		<footer className="footer">
			<img className="image" src="logo.svg" alt="logo" />
			<Flex flexDirection="column">
				<NavLink className="footerLink" to="/">
					Home
				</NavLink>
				<NavLink className="footerLink" to="/about">
					About
				</NavLink>
				<NavLink className="footerLink" to="/menu">
					Menu
				</NavLink>
				<NavLink className="footerLink" to="/reservations">
					Reservations
				</NavLink>
				<NavLink className="footerLink" to="/order">
					Order Online
				</NavLink>
				<NavLink className="footerLink" to="/login">
					Login
				</NavLink>
			</Flex>
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
