import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	user: null,
	token: null,
	profile: null,
	isAuthenticated: false,
};

const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		setCredentials: (state, action) => {
			const { user, token, profile } = action.payload;
			state.user = user;
			state.token = token;
			state.profile = profile;
			state.isAuthenticated = true;
		},
		logout: (state) => {
			state.user = null;
			state.token = null;
			state.isAuthenticated = false;
		},
	},
});

export const { setCredentials, logout } = userSlice.actions;
export default userSlice.reducer;

// Selectors
export const selectCurrentUser = (state) => state.user.user;
export const selectCurrentToken = (state) => state.user.token;
export const selectIsAuthenticated = (state) => state.user.isAuthenticated;
export const selectUserProfile = (state) => state.user.profile;
