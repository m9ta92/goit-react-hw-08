import css from './Contact.module.css';

import { TbUserFilled } from 'react-icons/tb';
import { TbPhoneFilled } from 'react-icons/tb';

import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/operations';

const Contact = ({ id, name, number }) => {
	const dispatch = useDispatch();

	return (
		<div className={css.item}>
			<div>
				<div className={css.title}>
					<TbUserFilled />
					<p>{name}</p>
				</div>
				<div className={css.title}>
					<TbPhoneFilled className={css.phone} />
					<a href="tel:">{number}</a>
				</div>
			</div>
			<button
				className={css.deleteBtn}
				onClick={() => dispatch(deleteContact(id))}
			>
				❌
			</button>
		</div>
	);
};

export default Contact;
