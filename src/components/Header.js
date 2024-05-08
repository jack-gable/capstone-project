import React from "react";
import "../css/Header.css";
import Nav from "./Nav";

function Header() {
	return (
		<header className="header">
			<img src="logo.svg" alt="logo" />
			<Nav />
		</header>
	);
}

export default Header;
