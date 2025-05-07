import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { ReservationProvider } from "../GlobalContext";
import BookingForm from "../components/BookingForm";

describe("BookingForm", () => {
	it("renders the form inputs correctly", () => {
		render(
			<ReservationProvider>
				<BookingForm />
			</ReservationProvider>
		);

		// Check if all inputs are rendered
		expect(screen.getByLabelText("Full name")).toBeInTheDocument();
		expect(screen.getByLabelText("Email address")).toBeInTheDocument();
		expect(screen.getByLabelText("Reservation date")).toBeInTheDocument();
		expect(screen.getByLabelText("Reservation time")).toBeInTheDocument();
		expect(screen.getByLabelText("Table id")).toBeInTheDocument();
		expect(screen.getByLabelText("Number of guests")).toBeInTheDocument();
		expect(screen.getByLabelText("Occasion")).toBeInTheDocument();
	});

	it("validates required fields and shows errors", async () => {
		render(
			<ReservationProvider>
				<BookingForm />
			</ReservationProvider>
		);

		// Submit the form without filling any inputs
		const submitButton = screen.getByRole("button");
		fireEvent.click(submitButton);

		// Check for validation errors
		expect(await screen.findByText("Name is required")).toBeInTheDocument();
		expect(await screen.findByText("Email is required")).toBeInTheDocument();
		expect(await screen.findByText("Date is required")).toBeInTheDocument();
		expect(await screen.findByText("Time is required")).toBeInTheDocument();
	});

	it("submits the form with valid inputs", async () => {
		render(
			<ReservationProvider>
				<BookingForm />
			</ReservationProvider>
		);

		// Fill out the form
		fireEvent.change(screen.getByLabelText("Full name"), {
			target: { value: "John Doe" },
		});
		fireEvent.change(screen.getByLabelText("Email address"), {
			target: { value: "john.doe@example.com" },
		});
		fireEvent.change(screen.getByLabelText("Reservation date"), {
			target: { value: "2025-05-10" },
		});
		fireEvent.change(screen.getByLabelText("Reservation time"), {
			target: { value: "18:00" },
		});
		fireEvent.change(screen.getByLabelText("Table id"), {
			target: { value: "1" },
		});
		fireEvent.change(screen.getByLabelText("Number of guests"), {
			target: { value: "4" },
		});
		fireEvent.change(screen.getByLabelText("Occasion"), {
			target: { value: "birthday" },
		});

		// Submit the form
		const submitButton = screen.getByRole("button");
		fireEvent.click(submitButton);

		// Check if the success message is displayed
		expect(
			await screen.findByText("Thanks for your reservation")
		).toBeInTheDocument();
	});
});
