import React from "react";
import Nav from "./Nav";
import { Box, Flex, Image } from "@chakra-ui/react";

function Header() {
	return (
		<Box as="header">
			<Flex
				justifyContent={"space-between"}
				alignItems={"center"}
				padding={{ base: "16px 25px", md: "25px 200px" }}
			>
				<Image src="logo.svg" alt="Logo" />
				<Nav />
			</Flex>
		</Box>
	);
}

export default Header;
