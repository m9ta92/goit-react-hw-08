import { createSlice } from '@reduxjs/toolkit';
import { register, logIn, logOut, refreshUser } from './operations';

const initialState = {
	user: { name: localStorage.getItem('authUser') || null, email: null },
	token: localStorage.getItem('authToken') || null,
	isLoggedIn: !!localStorage.getItem('authToken'),
	isRefreshing: false,
};

const authSlice = createSlice({
	name: 'auth',
	initialState,
	extraReducers: builder => {
		builder
			.addCase(register.fulfilled, (state, action) => {
				state.user = action.payload.user;
				state.token = action.payload.token;
				state.isLoggedIn = true;
			})
			.addCase(logIn.fulfilled, (state, action) => {
				state.user = action.payload.user;
				state.token = action.payload.token;
				state.isLoggedIn = true;
				localStorage.setItem('authUser', action.payload.user.name);
				localStorage.setItem('authToken', action.payload.token);
			})
			.addCase(logOut.fulfilled, state => {
				state.user = { name: null, email: null };
				state.token = null;
				state.isLoggedIn = false;
				localStorage.removeItem('authToken');
				localStorage.removeItem('authUser');
			})
			.addCase(refreshUser.pending, state => {
				state.isRefreshing = true;
			})
			.addCase(refreshUser.fulfilled, (state, action) => {
				state.user = action.payload;
				state.isLoggedIn = true;
				state.isRefreshing = false;
			})
			.addCase(refreshUser.rejected, state => {
				state.isRefreshing = false;
			});
	},
});

export const authReducer = authSlice.reducer;
