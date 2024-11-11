import css from './RegistrationForm.module.css';

import * as yup from 'yup';
import { register } from '../../redux/auth/operations';
import { useDispatch } from 'react-redux';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import toast, { Toaster } from 'react-hot-toast';

const validationSchema = yup.object({
	name: yup.string('Enter your name').required('Name is required'),
	email: yup
		.string('Enter your email')
		.email('Enter a valid email')
		.required('Email is required'),
	password: yup
		.string('Enter your password')
		.min(6, 'Password should be of minimum 6 characters length')
		.required('Password is required'),
});

const INITIAL_VALUES = {
	name: '',
	email: '',
	password: '',
};

export const RegistrationForm = () => {
	const dispatch = useDispatch();

	const handleSubmit = (values, actions) => {
		dispatch(register(values))
			.unwrap()
			.then(() => {
				console.log('register success');
				toast.success('Register success !');
			})
			.catch(() => {
				console.log('register error');
				toast.error('User with this name or email address already exists !');
			});
		actions.resetForm();
	};

	return (
		<div>
			<Formik
				initialValues={INITIAL_VALUES}
				validationSchema={validationSchema}
				onSubmit={handleSubmit}
			>
				<Form className={css.form}>
					<label>
						<Field
							type="text"
							name="name"
							className={css.input}
							placeholder="Enter your name"
						/>
						<ErrorMessage
							className={css.errorMessage}
							name="name"
							component="span"
						/>
					</label>
					<label>
						<Field
							type="text"
							name="email"
							className={css.input}
							placeholder="Enter your email"
						/>
						<ErrorMessage
							className={css.errorMessage}
							name="email"
							component="span"
						/>
					</label>
					<label>
						<Field
							type="password"
							name="password"
							className={css.input}
							placeholder="Enter your password"
						/>
						<ErrorMessage
							className={css.errorMessage}
							name="password"
							component="span"
						/>
					</label>
					<button className={css.btn} type="submit">
						Register
					</button>
				</Form>
			</Formik>
			<Toaster position="top-center" reverseOrder={false} />
		</div>
	);
};

export default RegistrationForm;
