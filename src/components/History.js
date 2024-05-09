import { Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import "../css/History.css";
import mario from "../icons_assets/Mario and Adrian A.jpg";
import restaurant from "../icons_assets/restaurant.jpg";

function History() {
	return (
		<section className="history">
			<Flex alignItems="center" justifyContent="space-between">
				<article className="heroText">
					<div>
						<Text as="h3" fontSize="4xl">
							Little Lemon
						</Text>
						<Text as="h4" fontSize="xl">
							Chicago
						</Text>
					</div>
					<Text>
						Sunt minim est nostrud velit velit dolore nulla mollit
						commodo. Occaecat consectetur magna deserunt laboris
						laboris aute elit. Aliqua ipsum ad adipisicing id aute
						cillum.
					</Text>
				</article>
				<div className="imageContainer">
					<Image borderRadius={16} className="image1" src={mario} />
					<Image borderRadius={16} src={restaurant} />
				</div>
			</Flex>
		</section>
	);
}

export default History;
