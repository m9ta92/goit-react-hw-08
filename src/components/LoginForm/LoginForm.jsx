import css from './LoginForm.module.css';

import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/auth/operations';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import toast, { Toaster } from 'react-hot-toast';

const validationSchema = yup.object({
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
	email: '',
	password: '',
};

export const LoginForm = () => {
	const dispatch = useDispatch();

	const handleSubmit = (values, actions) => {
		dispatch(logIn(values))
			.unwrap()
			.then(() => {
				console.log('login success');
			})
			.catch(() => {
				console.log('login error');
				toast.error('Invalid email or password !');
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
						Log In
					</button>
				</Form>
			</Formik>
			<Toaster position="top-center" reverseOrder={false} />
		</div>
	);
};

export default LoginForm;
