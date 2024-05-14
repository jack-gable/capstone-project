import React from "react";
import { Box, Button, Flex, Heading, Image, Text } from "@chakra-ui/react";
import foodImage from "../icons_assets/restauranfood.jpg";
import { Link } from "react-router-dom";

function Hero() {
	return (
		<Box
			as="section"
			backgroundColor={"var(--color-primary-green)"}
			color={"var(--color-white)"}
			padding={{ base: "0 25px 25px", md: "0 200px 0 200px" }}
		>
			<Flex justifyContent={"space-between"}>
				<Box as="article" width={280} paddingTop={50}>
					<Flex flexDirection={"column"} gap={"16px"}>
						<div>
							<Heading
								as="h1"
								fontSize={56}
								fontFamily={"Markazi text"}
								lineHeight={1}
								color={"var(--color-primary-yellow)"}
							>
								Little Lemon
							</Heading>
							<Heading
								as="h4"
								fontSize={32}
								fontFamily={"Markazi text"}
							>
								Chicago
							</Heading>
						</div>
						<Text fontSize={20}>
							We are a family owned Mediterranean restaurant,
							focused on traditional recipes served with a modern
							twist.
						</Text>
						<Button maxW={200} colorScheme="yellow">
							<Link to="/reservations">Reserve A Table</Link>
						</Button>
					</Flex>
				</Box>
				<Image
					src={foodImage}
					alt="Chef holding plate of bruchetta"
					objectFit="cover"
					width={425}
					height={415}
					position={"relative"}
					top={"30px"}
					borderRadius={"8px"}
					display={{ base: "none", md: "block" }}
				/>
			</Flex>
		</Box>
	);
}

export default Hero;
