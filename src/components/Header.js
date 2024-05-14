import React from "react";
import "../css/Header.css";
import Nav from "./Nav";
import { Image } from "@chakra-ui/react";

function Header() {
	return (
		<header className="header">
			<Image src="logo.svg" alt="logo" />
			<Nav />
		</header>
	);
}

export default Header;
