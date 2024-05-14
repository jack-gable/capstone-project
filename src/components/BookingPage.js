import React, { useReducer } from "react";
import BookingForm from "./BookingForm";
import { Box, Heading } from "@chakra-ui/react";
import { updateTimes, initializeTimes } from "../utils";

function BookingPage() {
	const [availableTimes, dispatch] = useReducer(
		updateTimes,
		initializeTimes()
	);

	return (
		<Box
			backgroundColor={"var(--color-primary-green)"}
			padding={{ base: "25px", md: "25px 200px" }}
		>
			<Heading
				as="h1"
				fontFamily="Markazi Text"
				color={"var(--color-primary-yellow)"}
			>
				Reservations
			</Heading>
			<BookingForm availableTimes={availableTimes} dispatch={dispatch} />
		</Box>
	);
}

export default BookingPage;
