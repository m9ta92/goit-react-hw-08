import css from './LoginForm.module.css';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/auth/operations';
import { useFormik } from 'formik';
import { Button, TextField } from '@mui/material';
import toast, { Toaster } from 'react-hot-toast';

const validationSchema = yup.object({
	email: yup
		.string('Enter your email')
		.email('Enter a valid email')
		.required('Email is required'),
	password: yup
		.string('Enter your password')
		.min(8, 'Password should be of minimum 8 characters length')
		.required('Password is required'),
});

export const LoginForm = () => {
	const dispatch = useDispatch();

	const handleSubmit = e => {
		e.preventDefault();
		const form = e.currentTarget;

		dispatch(
			logIn({
				email: form.elements.email.value,
				password: form.elements.password.value,
			})
		)
			.unwrap()
			.then(() => {
				console.log('login success');
			})
			.catch(() => {
				console.log('login error');
				toast.error('Invalid email or password !');
			});

		form.reset();
	};

	const formik = useFormik({
		initialValues: {
			email: '',
			password: '',
		},
		validationSchema: validationSchema,
		onSubmit: values => {
			alert(JSON.stringify(values, null, 2));
		},
	});

	return (
		<>
			<div>
				<form onSubmit={handleSubmit} className={css.form} autoComplete="off">
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
						Log In
					</Button>
				</form>
			</div>
			<Toaster position="top-center" reverseOrder={false} />
		</>
	);
};
