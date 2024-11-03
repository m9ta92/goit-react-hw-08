import css from './ContactForm.module.css';

import { IoPersonAddSharp } from 'react-icons/io5';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';

import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contacts/operations';

const ContactForm = () => {
	const dispatch = useDispatch();

	const handleSubmit = (values, actions) => {
		onAddContact(values);
		actions.resetForm();
	};

	const onAddContact = formData => {
		const newContact = {
			...formData,
		};
		dispatch(addContact(newContact));
	};

	const phoneNumberRegex = /^[0-9]{3}?[-\s.]?[0-9]{2}[-\s.]?[0-9]{2}$/;
	const AddContactSchema = Yup.object({
		name: Yup.string()
			.min(3, 'Too short!')
			.max(50, 'Name must be less than 50 characters')
			.required('Required'),
		number: Yup.string()
			.required('Required')
			.matches(phoneNumberRegex, 'Number must be 111-11-11 !!!'),
	});

	return (
		<Formik
			initialValues={{ name: '', number: '' }}
			validationSchema={AddContactSchema}
			onSubmit={handleSubmit}
		>
			<Form className={css.form}>
				<label>
					<Field
						className={css.input}
						type="text"
						name="name"
						placeholder="Enter your name..."
					/>
				</label>
				<ErrorMessage className={css.error} name="name" component="span" />
				<label>
					<Field
						className={css.input}
						type="text"
						name="number"
						placeholder="Enter your number..."
					/>
				</label>
				<ErrorMessage className={css.error} name="number" component="span" />
				<button className={css.btn} type="submit">
					<IoPersonAddSharp />
				</button>
			</Form>
		</Formik>
	);
};
export default ContactForm;
