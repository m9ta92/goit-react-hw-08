import css from './ContactList.module.css';

import Contact from '../Contact/Contact';

import { useSelector } from 'react-redux';
import { selectFilteredContacts } from '../../redux/filters/selectors';

const ContactList = () => {
	const contacts = useSelector(selectFilteredContacts);
	if (contacts.length !== 0) {
		return (
			<div className={css.container}>
				<ul className={css.list}>
					{contacts &&
						contacts.map(contact => (
							<li key={contact.id}>
								<Contact
									id={contact.id}
									name={contact.name}
									number={contact.number}
								/>
							</li>
						))}
				</ul>
			</div>
		);
	} else {
		return <p className={css.container}>No any contact yet 🤷‍♂️</p>;
	}
};

export default ContactList;
