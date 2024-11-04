import css from './RegistrationForm.module.css';

import * as yup from 'yup';
import { register } from '../../redux/auth/operations';
import { useDispatch } from 'react-redux';
import { Button, TextField } from '@mui/material';
import { useFormik } from 'formik';

const validationSchema = yup.object({
	name: yup
		.string('Enter your name')
		.min(6, 'Name should be of minimum 6 characters length')
		.required('Name is required'),
	email: yup
		.string('Enter your email')
		.email('Enter a valid email')
		.required('Email is required'),
	password: yup
		.string('Enter your password')
		.min(6, 'Password should be of minimum 6 characters length')
		.required('Password is required'),
});

export const RegistrationForm = () => {
	const dispatch = useDispatch();

	const handleSubmit = e => {
		e.preventDefault();
		const form = e.target;

		dispatch(
			register({
				name: form.elements.name.value,
				email: form.elements.email.value,
				password: form.elements.password.value,
			})
		);

		form.reset();
	};

	const formik = useFormik({
		initialValues: {
			name: '',
			email: '',
			password: '',
		},
		validationSchema: validationSchema,
		onSubmit: values => {
			alert(JSON.stringify(values, null, 2));
		},
	});

	return (
		<div>
			<form onSubmit={handleSubmit} autoComplete="off" className={css.form}>
				<TextField
					fullWidth
					id="name"
					name="name"
					label="Username"
					type="text"
					value={formik.values.name}
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
					error={formik.touched.name && Boolean(formik.errors.name)}
					helperText={formik.touched.name && formik.errors.name}
				/>
				<TextField
					fullWidth
					id="email"
					name="email"
					label="Email"
					value={formik.values.email}
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
					error={formik.touched.email && Boolean(formik.errors.email)}
					helperText={formik.touched.email && formik.errors.email}
				/>
				<TextField
					fullWidth
					id="password"
					name="password"
					label="Password"
					type="password"
					value={formik.values.password}
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
					error={formik.touched.password && Boolean(formik.errors.password)}
					helperText={formik.touched.password && formik.errors.password}
				/>
				<Button color="primary" variant="contained" fullWidth type="submit">
					Register
				</Button>
			</form>
		</div>
	);
};
