import css from './ContactsPage.module.css';

import ContactForm from '../../components/ContactForm/ContactForm.jsx';
import SearchBox from '../../components/SearchBox/SearchBox.jsx';
import Loader from '../../components/Loader/Loader.jsx';
import ContactList from '../../components/ContactList/ContactList.jsx';

import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import { fetchContacts } from '../../redux/contacts/operations.js';
import {
	selectContacts,
	selectError,
	selectIsLoading,
} from '../../redux/contacts/selectors.js';

function ContactsPage() {
	const dispatch = useDispatch();
	const isLoading = useSelector(selectIsLoading);
	const error = useSelector(selectError);
	const contacts = useSelector(selectContacts);

	useEffect(() => {
		dispatch(fetchContacts());
	}, [dispatch]);

	return (
		<>
			<div className={css.container}>
				<div>
					<ContactForm />
					<SearchBox />
				</div>
				{isLoading && !error && <Loader />}
				<div>
					{contacts ? (
						<ContactList contacts={contacts} />
					) : (
						<b>Request in progress...</b>
					)}
				</div>
			</div>
		</>
	);
}

export default ContactsPage;
