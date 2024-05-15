import React from "react";
import bikeIcon from "../icons_assets/bike.svg";
import {
	Card,
	CardBody,
	Flex,
	Heading,
	Image,
	Link,
	Stack,
	Text,
} from "@chakra-ui/react";

function CardComponent({ image, title, price, desc }) {
	return (
		<Card
			size="sm"
			maxW={270}
			height={440}
			overflow="hidden"
			variant="unstyled"
			backgroundColor="var(--color-gray)"
			borderRadius="16px 16px 0 0"
		>
			<CardBody position="relative">
				<Image
					borderRadius="16px 16px 0 0"
					border="1px solid black"
					objectFit="cover"
					src={image}
					alt=""
					height={180}
					width={275}
				/>
				<Flex
					flexDirection="column"
					gap={6}
					justifyContent="space-between"
					padding={"20px 25px 16px"}
				>
					<Stack
						direction="row"
						alignItems="center"
						justifyContent="space-between"
					>
						<Heading size="sm">{title}</Heading>
						<Text fontWeight={700} color="var(--color-darkorange)">
							${price}
						</Text>
					</Stack>
					<Text>{desc}</Text>
				</Flex>
				<Flex
					gap={"10px"}
					alignItems={"center"}
					position={"absolute"}
					bottom={"20px"}
					left={"25px"}
					fontWeight={700}
				>
					<Link href="/order">Order a delivery</Link>
					<Image src={bikeIcon} alt="" />
				</Flex>
			</CardBody>
		</Card>
	);
}

export default CardComponent;
