import React from "react";
import "../css/Highlights.css";
import bikeIcon from "../icons_assets/bike.svg";
import greekSalad from "../icons_assets/greek salad.jpg";
import bruchetta from "../icons_assets/bruchetta.svg";
import lemonDessert from "../icons_assets/lemon dessert.jpg";
import { Card, CardBody, Heading, Image, Stack, Text } from "@chakra-ui/react";

function Highlights() {
	return (
		<section>
			<div>
				<h2>This Weeks Specials!</h2>
				<button>Online Menu</button>
			</div>
			<div className="cardContainer">
				{/* <Card
					image={greekSalad}
					title="Greek Salad"
					price="12.99"
					desc="The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. "
				/>
				<Card
					image={bruchetta}
					title="Bruchetta"
					price="5.99"
					desc="Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. "
				/>
				<Card
					image={lemonDessert}
					title="Lemon Dessert"
					price="5.00"
					desc="This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined."
				/> */}
				<Card
					size="sm"
					maxW={270}
					overflow="hidden"
					variant="unstyled"
					backgroundColor="var(--color-gray)"
					borderRadius="16px 16px 0 0"
				>
					<CardBody>
						<Image
							borderRadius="16px 16px 0 0"
							border="1px solid black"
							objectFit="contain"
							src={greekSalad}
							alt=""
						/>
						<Stack>
							<Stack
								direction="row"
								alignItems="center"
								justifyContent="space-between"
							>
								<Heading size="sm">Greek Salad</Heading>
								<Text
									fontWeight={700}
									color="var(--color-darkorange)"
								>
									$12.99
								</Text>
							</Stack>
							<Text>
								The famous greek salad of crispy lettuce,
								peppers, olives and our Chicago style feta
								cheese, garnished with crunchy garlic and
								rosemary croutons.
							</Text>
							<button className="btn">
								Order a delivery
								<Image src={bikeIcon} alt="" />
							</button>
						</Stack>
					</CardBody>
				</Card>
			</div>
		</section>
	);
}

export default Highlights;
