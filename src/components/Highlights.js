import React from "react";
import "../css/Highlights.css";
import greekSalad from "../icons_assets/greek salad.jpg";
import bruchetta from "../icons_assets/bruchetta.svg";
import lemonDessert from "../icons_assets/lemon dessert.jpg";
import CardComponent from "./CardComponent";
import { Button, Flex, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

function Highlights() {
	return (
		<section className="highlights">
			<Flex justifyContent="space-between" alignItems="center">
				<Text as="h2" fontSize={64}>
					This Weeks Specials!
				</Text>
				<Button width={200} colorScheme="yellow">
					<Link to="/">Online Menu</Link>
				</Button>
			</Flex>
			<div className="cardContainer">
				<CardComponent
					image={greekSalad}
					title="Greek Salad"
					price="12.99"
					desc="The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. "
				/>
				<CardComponent
					image={bruchetta}
					title="Bruchetta"
					price="5.99"
					desc="Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. "
				/>
				<CardComponent
					image={lemonDessert}
					title="Lemon Dessert"
					price="5.00"
					desc="This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined."
				/>
			</div>
		</section>
	);
}

export default Highlights;
