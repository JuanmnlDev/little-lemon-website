import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	bookings: [],
};

const bookingSlice = createSlice({
	name: "booking",
	initialState,
	reducers: {
		addBooking: (state, action) => {
			state.bookings.push(action.payload);
		},
		removeBooking: (state, action) => {
			state.bookings = state.bookings.filter(
				(booking) => booking.id !== action.payload
			);
		},
	},
});

export const { addBooking, removeBooking } = bookingSlice.actions;
export default bookingSlice.reducer;

// Selector to get all bookings
export const selectAllBookings = (state) => state.bookings.bookings;

// Example booking object structure:
// {
//   id: 'unique-id',
//   email: 'user@example.com',
//   guests: 4,
//   occasion: 'Birthday',
//   dateTime: '2025-05-15T19:00',
//   tableNumber: 12
// }
