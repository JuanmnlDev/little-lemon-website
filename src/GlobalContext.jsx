import { createContext, useReducer, useContext } from "react";

// Initial state
const initialState = {
	reservations: [],
};

// Reducer function
const reservationReducer = (state, action) => {
	switch (action.type) {
		case "ADD_RESERVATION":
			return {
				...state,
				reservations: [...state.reservations, action.payload],
			};
		default:
			return state;
	}
};

// Create context
const ReservationContext = createContext();

// Context provider
// eslint-disable-next-line react/prop-types
export const ReservationProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reservationReducer, initialState);

	return (
		<ReservationContext.Provider value={{ state, dispatch }}>
			{children}
		</ReservationContext.Provider>
	);
};

// Custom hook to use the ReservationContext
export const useReservationContext = () => {
	const context = useContext(ReservationContext);
	if (!context) {
		throw new Error(
			"useReservationContext must be used within a ReservationProvider"
		);
	}
	return context;
};
