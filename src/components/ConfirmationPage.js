import { Box, Button, Card, Flex, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function ConfirmationPage() {
	const navigate = useNavigate();
	const [booking, setBooking] = useState([]);

	useEffect(() => {
		const booking = localStorage.getItem("Bookings");
		if (booking) {
			setBooking(JSON.parse(booking));
		}
	}, []);

	return (
		<Box
			backgroundColor={"var(--color-primary-green)"}
			color={"var(--color-white)"}
			padding={"25px"}
		>
			<Flex
				flexDirection={"column"}
				justifyContent={"center"}
				alignItems={"center"}
				gap={"20px"}
			>
				<Text
					as={"h1"}
					fontSize={"48px"}
					color={"var(--color-primary-yellow)"}
					lineHeight={1}
				>
					Thank you for your reservation.
				</Text>
				<Text as={"h3"} fontSize={"32px"} lineHeight={1}>
					We look forward to seeing you!
				</Text>
				{booking && (
					<Card padding={"20px 32px"} boxShadow={"2px 3px 6px #000"}>
						<Text
							as={"h4"}
							fontSize={"24px"}
							fontFamily={"Karla"}
							fontWeight={"700"}
							paddingBottom={"10px"}
						>
							Booking Details
						</Text>
						<Text>
							<strong>Occasion:</strong> {booking.occasion}
						</Text>
						<Text>
							<strong>Guests:</strong> {booking.guests}
						</Text>
						<Text>
							<strong>Date:</strong> {booking.date}
						</Text>
						<Text>
							<strong>Time:</strong> {booking.time}
						</Text>
					</Card>
				)}
				<Button
					colorScheme="yellow"
					onClick={() => navigate("/")}
					marginTop={"32px"}
				>
					Back to home
				</Button>
			</Flex>
		</Box>
	);
}

export default ConfirmationPage;
