import { createSlice } from '@reduxjs/toolkit';
import { addContact, deleteContact, fetchContacts } from './operations';
import { logOut } from '../auth/operations';

export const initialState = {
	contacts: {
		items: [],
		loading: false,
		error: null,
	},
};

const contactsSlice = createSlice({
	name: 'contacts',
	initialState,
	extraReducers: builder =>
		builder
			.addCase(fetchContacts.pending, state => {
				state.loading = true;
				state.error = null;
			})
			.addCase(fetchContacts.fulfilled, (state, action) => {
				state.loading = false;
				state.items = action.payload;
			})
			.addCase(fetchContacts.rejected, (state, action) => {
				state.loading = false;
				state.error = action.payload;
			})

			.addCase(addContact.fulfilled, (state, action) => {
				state.items.unshift(action.payload);
			})

			.addCase(deleteContact.fulfilled, (state, action) => {
				state.items = state.items.filter(
					contact => contact.id !== action.payload
				);
			})

			.addCase(logOut.fulfilled, () => {
				return initialState;
			}),
});
export const contactsReducer = contactsSlice.reducer;
