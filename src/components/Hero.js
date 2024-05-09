import React from "react";
import "../css/Hero.css";
import { Button, Image } from "@chakra-ui/react";
import foodImage from "../icons_assets/restauranfood.jpg";
import { Link } from "react-router-dom";

function Hero() {
	return (
		<section className="hero">
			<article className="heroText">
				<div>
					<h1 className="heroTitle">Little Lemon</h1>
					<h4 className="heroSubtitle">Chicago</h4>
				</div>
				<p className="heroDesc">
					We are a family owned Mediterranean restaurant, focused on
					traditional recipes served with a modern twist.
				</p>
				<Button width={200} colorScheme="yellow">
					<Link to="/">Reserve A Table</Link>
				</Button>
			</article>
			<Image
				src={foodImage}
				alt="Chef holding plate of bruchetta"
				objectFit="cover"
				width={425}
				height={415}
				className="heroImg"
			/>
		</section>
	);
}

export default Hero;
