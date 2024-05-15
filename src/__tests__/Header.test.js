import { render, screen } from "@testing-library/react";
import Header from "../components/Header";

window.matchMedia =
	window.matchMedia ||
	function () {
		return {
			matches: false,
			addListener: function () {},
			removeListener: function () {},
		};
	};

describe("Logo", () => {
	test("Logo must have src = '/logo.svg' and alt 'Logo'", () => {
		render(<Header />);

		const logo = screen.getByRole("img");
		expect(logo).toHaveAttribute("src", "logo.svg");
		expect(logo).toHaveAttribute("alt", "Logo");
	});
});
