import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { MemoryRouter } from "react-router-dom";
import { ReservationProvider } from "../GlobalContext";
import Booking from "../pages/Booking";

describe("Booking", () => {
	it("renders Booking page", () => {
		render(
			<ReservationProvider>
				<MemoryRouter>
					<Booking />
				</MemoryRouter>
			</ReservationProvider>
		);
		const formElement = screen.getByTestId("booking-page");
		expect(formElement).toBeInTheDocument();
	});
});
