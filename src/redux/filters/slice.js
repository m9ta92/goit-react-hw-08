import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	searchQuery: '',
};

const filtersSlice = createSlice({
	name: 'filters',
	initialState,
	reducers: {
		changeFilter: (state, action) => {
			state.searchQuery = action.payload;
		},
	},
});

export const { changeFilter } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
