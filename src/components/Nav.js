import React from "react";
import "../css/Nav.css";
import { NavLink } from "react-router-dom";

function Nav() {
	return (
		<nav className="nav">
			<NavLink className="navLink" to="/">
				Home
			</NavLink>
			<NavLink className="navLink" to="/about">
				About
			</NavLink>
			<NavLink className="navLink" to="/menu">
				Menu
			</NavLink>
			<NavLink className="navLink" to="/reservations">
				Reservations
			</NavLink>
			<NavLink className="navLink" to="/order">
				Order Online
			</NavLink>
			<NavLink className="navLink" to="/login">
				Login
			</NavLink>
		</nav>
	);
}

export default Nav;
