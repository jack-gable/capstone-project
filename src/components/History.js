import { Box, Flex, Image, Show, Text } from "@chakra-ui/react";
import React from "react";
import mario from "../icons_assets/Mario and Adrian A.jpg";
import restaurant from "../icons_assets/restaurant.jpg";

function History() {
	return (
		<Box padding={{ base: 25, md: "40px 200px 80px" }}>
			<Flex
				alignItems="center"
				justifyContent={"space-between"}
				flexDirection={{ base: "column", md: "row" }}
			>
				<article>
					<div>
						<Text as="h3" fontSize="4xl">
							Little Lemon
						</Text>
						<Text as="h4" fontSize="xl">
							Chicago
						</Text>
					</div>
					<Text maxW={375}>
						Sunt minim est nostrud velit velit dolore nulla mollit
						commodo. Occaecat consectetur magna deserunt laboris
						laboris aute elit. Aliqua ipsum ad adipisicing id aute
						cillum.
					</Text>
				</article>
				<Show breakpoint="(min-width: 550px)">
					<Box
						width={275}
						position={"relative"}
						className="imageContainer"
					>
						<Image
							position={"absolute"}
							bottom={"-40%"}
							left={"-70%"}
							borderRadius={16}
							className="image1"
							src={mario}
						/>
						<Image borderRadius={16} src={restaurant} />
					</Box>
				</Show>
			</Flex>
		</Box>
	);
}

export default History;
