import {
	Box,
	Card,
	CardBody,
	Flex,
	Image,
	Stack,
	Text,
} from "@chakra-ui/react";
import React from "react";
import { FaStar } from "react-icons/fa6";
import person from "../icons_assets/testimonial.png";

function Testimonials() {
	return (
		<Box
			as="section"
			padding={{ base: "25px", md: "42px 200px" }}
			backgroundColor={"var(--color-gray)"}
		>
			<Text as="h2" fontSize={36} textAlign="center" paddingBottom={10}>
				Testimonials
			</Text>
			<Flex
				justifyContent="space-between"
				flexDirection={{ base: "column", md: "row" }}
				alignItems={"center"}
				gap={{ base: "16px", md: 0 }}
			>
				<Card width={200} borderRadius={16}>
					<CardBody>
						<Stack>
							<Flex alignItems="center">
								<Text>Rating: </Text>{" "}
								<FaStar color="goldenrod" />
								<FaStar color="goldenrod" />
								<FaStar color="goldenrod" />
								<FaStar color="goldenrod" />
								<FaStar color="goldenrod" />
							</Flex>
							<Image src={person} alt="" />
							<Text>
								Fugiat sit et reprehenderit amet incididunt.
							</Text>
						</Stack>
					</CardBody>
				</Card>
				<Card width={200} borderRadius={16}>
					<CardBody>
						<Stack>
							<Flex alignItems="center">
								<Text>Rating: </Text>{" "}
								<FaStar color="goldenrod" />
								<FaStar color="goldenrod" />
								<FaStar color="goldenrod" />
								<FaStar color="goldenrod" />
								<FaStar color="goldenrod" />
							</Flex>
							<Image src={person} alt="" />
							<Text>Quis duis fugiat do non amet.</Text>
						</Stack>
					</CardBody>
				</Card>
				<Card width={200} borderRadius={16}>
					<CardBody>
						<Stack>
							<Flex alignItems="center">
								<Text>Rating: </Text>{" "}
								<FaStar color="goldenrod" />
								<FaStar color="goldenrod" />
								<FaStar color="goldenrod" />
								<FaStar color="goldenrod" />
								<FaStar color="goldenrod" />
							</Flex>
							<Image src={person} alt="" />
							<Text>
								Fugiat sit et reprehenderit amet incididunt.
							</Text>
						</Stack>
					</CardBody>
				</Card>
				<Card width={200} borderRadius={16}>
					<CardBody>
						<Stack>
							<Flex alignItems="center">
								<Text>Rating: </Text>{" "}
								<FaStar color="goldenrod" />
								<FaStar color="goldenrod" />
								<FaStar color="goldenrod" />
								<FaStar color="goldenrod" />
								<FaStar color="goldenrod" />
							</Flex>
							<Image src={person} alt="" />
							<Text>Quis duis fugiat do non amet.</Text>
						</Stack>
					</CardBody>
				</Card>
			</Flex>
		</Box>
	);
}

export default Testimonials;
