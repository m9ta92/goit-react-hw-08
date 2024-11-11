import { createSelector } from '@reduxjs/toolkit';
import { selectFilteredSearchQuery } from '../filters/selectors';

export const selectContacts = state => state.contacts.items;
export const selectIsLoading = state => state.contacts.loading;
export const selectError = state => state.contacts.error;

export const selectFilteredContacts = createSelector(
	// [selectContacts, selectNameFilter],
	[selectContacts, selectFilteredSearchQuery],
	(contacts, searchQuery) =>
		contacts.filter(
			contact =>
				contact.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
				contact.number.includes(searchQuery)
		)
);
