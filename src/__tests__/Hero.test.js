import { render, screen } from "@testing-library/react";
import Hero from "../components/Hero";

window.matchMedia =
	window.matchMedia ||
	function () {
		return {
			matches: false,
			addListener: function () {},
			removeListener: function () {},
		};
	};

describe("Hero", () => {
	test("Hero component renders text and images", () => {
		render(<Hero />);

		const title = screen.getByRole("heading", { name: "Little Lemon" });
		expect(title).toBeInTheDocument();

		const image = screen.getByRole("img");
		expect(image).toHaveAttribute("src", "restauranfood.jpg");
		expect(image).toHaveAttribute("alt", "Chef holding plate of bruchetta");
	});
});
