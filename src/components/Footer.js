import React from "react";
import { Flex, Grid, Image, Link, Stack, Text } from "@chakra-ui/react";

function Footer() {
	return (
		<footer>
			<Grid
				templateColumns={{ base: "1fr", md: "repeat(4, 1fr)" }}
				templateRows={{ base: "repeat(4, 1fr)", md: "1fr" }}
				alignItems={"center"}
				justifyItems={"center"}
				gap={{ base: "16px", md: 0 }}
				padding={{ base: 25, md: "60px 200px" }}
			>
				<Image alignSelf={"center"} src="logo.svg" alt="logo" />
				<Flex flexDirection="column">
					<Link to="/">Home</Link>
					<Link to="/about">About</Link>
					<Link to="/menu">Menu</Link>
					<Link to="/reservations">Reservations</Link>
					<Link to="/order">Order Online</Link>
					<Link to="/login">Login</Link>
				</Flex>
				<Stack alignSelf={{ md: "flex-start" }}>
					<Text>address</Text>
					<Text>phone number</Text>
					<Text>email</Text>
				</Stack>
				<Stack alignSelf={{ md: "flex-start" }}>
					<Text>address</Text>
					<Text>phone number</Text>
					<Text>email</Text>
				</Stack>
			</Grid>
		</footer>
	);
}

export default Footer;
