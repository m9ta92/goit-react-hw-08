import { createSelector } from '@reduxjs/toolkit';
import { selectContacts } from '../contacts/selectors';

export const selectFilteredSearchQuery = state => state.filters.searchQuery;

export const selectFilteredContacts = createSelector(
	[selectContacts, selectFilteredSearchQuery],
	(contacts, searchQuery) =>
		contacts.filter(
			contact =>
				contact.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
				contact.number.includes(searchQuery)
		)
);
