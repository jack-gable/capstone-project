import {
	Button,
	Container,
	Flex,
	FormControl,
	FormErrorMessage,
	FormLabel,
	Input,
	Select,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { submitAPI } from "../utils";
import { useFormik } from "formik";
import * as Yup from "yup";

const BookingForm = ({ availableTimes, dispatch, ...props }) => {
	const navigate = useNavigate();

	const formik = useFormik({
		initialValues: {
			date: new Date().toLocaleDateString("en-CA"),
			time: availableTimes.times[0],
			guests: 1,
			occasion: "birthday",
		},
		onSubmit: (values) => {
			const response = submitAPI(values);
			if (response) {
				localStorage.setItem("Bookings", JSON.stringify(values));
				navigate("/confirmation");
				// console.log(values);
			}
		},
		validationSchema: Yup.object({
			date: Yup.date().required("Date is required"),
			time: Yup.string()
				.oneOf(availableTimes.times)
				.required("Time is required"),
			guests: Yup.number()
				.min(1, "Must be at least 1")
				.max(10, "Must be at most 10")
				.required("Number of guests is required"),
			occasion: Yup.string()
				.oneOf(["birthday", "engagement", "anniversary"])
				.required("Occasion is required"),
		}),
	});

	useEffect(() => {
		dispatch({ type: "UPDATE_TIMES", date: new Date(formik.values.date) });
	}, [formik.values.date, dispatch]);

	return (
		<Container
			{...props}
			id="menu"
			color={"var(--color-white)"}
			padding={"25px 16px"}
		>
			<form onSubmit={formik.handleSubmit} noValidate>
				<Flex flexDirection={"column"} gap={"20px"}>
					<FormControl
						isInvalid={formik.touched.date && formik.errors.date}
					>
						<FormLabel htmlFor="res-date">Date:</FormLabel>
						<Input
							type="date"
							data-testid="res-date"
							id="res-date"
							{...formik.getFieldProps("date")}
						/>
						<FormErrorMessage data-testid="res-date-error">
							{formik.errors.date}
						</FormErrorMessage>
					</FormControl>

					<FormControl
						isInvalid={formik.touched.time && formik.errors.time}
					>
						<FormLabel htmlFor="res-time">Time:</FormLabel>
						<Select
							data-testid="res-time"
							id="res-time"
							{...formik.getFieldProps("time")}
						>
							{availableTimes.times.map((time) => (
								<option key={time} value={time}>
									{time}
								</option>
							))}
						</Select>
						<FormErrorMessage data-testid="res-time-error">
							{formik.errors.time}
						</FormErrorMessage>
					</FormControl>

					<FormControl
						isInvalid={
							formik.touched.guests && formik.errors.guests
						}
					>
						<FormLabel htmlFor="guests">
							Number of guests:
						</FormLabel>
						<Input
							data-testid="guests"
							type="number"
							placeholder="1"
							min="1"
							max="10"
							id="guests"
							{...formik.getFieldProps("guests")}
						/>
						<FormErrorMessage data-testid="guests-error">
							{formik.errors.guests}
						</FormErrorMessage>
					</FormControl>

					<FormControl
						isInvalid={
							formik.touched.occasion && formik.errors.occasion
						}
					>
						<FormLabel htmlFor="occasion">Occasion:</FormLabel>
						<Select
							data-testid="occasion"
							id="occasion"
							{...formik.getFieldProps("occasion")}
						>
							<option value="birthday" className="opt">
								Birthday
							</option>
							<option value="engagement" className="opt">
								Engagement
							</option>
							<option value="anniversary" className="opt">
								Anniversary
							</option>
						</Select>
						<FormErrorMessage data-testid="occasion-error">
							{formik.errors.occasion}
						</FormErrorMessage>
					</FormControl>

					<Button
						data-testid="submit-btn"
						type="submit"
						colorScheme="yellow"
						width={"min-content"}
						alignSelf={"center"}
					>
						Make Your Reservation
					</Button>
				</Flex>
			</form>
		</Container>
	);
};

export default BookingForm;
