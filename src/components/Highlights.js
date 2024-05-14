import React from "react";
import greekSalad from "../icons_assets/greek salad.jpg";
import bruchetta from "../icons_assets/bruchetta.svg";
import lemonDessert from "../icons_assets/lemon dessert.jpg";
import CardComponent from "./CardComponent";
import { Box, Button, Flex, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

function Highlights() {
	return (
		<Box
			as="section"
			padding={{ base: "25px", md: "42px 200px" }}
			className="highlights"
		>
			<Flex
				flexDirection={{ base: "column", md: "row" }}
				justifyContent={"space-between"}
				alignItems="center"
				paddingBottom={{ base: 25, md: 0 }}
			>
				<Text
					as="h2"
					fontSize={{ base: 32, md: 64 }}
					width={"max-content"}
				>
					This Weeks Specials!
				</Text>
				<Button width={{ base: "auto", md: 200 }} colorScheme="yellow">
					<Link to="/order">Online Menu</Link>
				</Button>
			</Flex>
			<Flex
				justifyContent={"space-between"}
				alignItems={{ base: "center", md: 0 }}
				gap={{ base: "25px", md: 0 }}
				flexDirection={{ base: "column", md: "row" }}
			>
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
			</Flex>
		</Box>
	);
}

export default Highlights;
