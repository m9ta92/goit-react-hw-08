import { createSelector } from '@reduxjs/toolkit';
import { selectContacts } from '../contacts/selectors';

export const selectFilteredName = state => state.filters.name;
export const selectFilteredContacts = createSelector(
	[selectContacts, selectFilteredName],
	(contacts, filter) =>
		contacts.filter(contact =>
			contact.name.toLowerCase().includes(filter.toLowerCase())
		)
);
