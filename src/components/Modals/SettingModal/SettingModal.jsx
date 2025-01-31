import css from './SettingModal.module.css';
import UpdateAvatar from './UpdateAvatar';
import { Field, Form, Formik } from 'formik';
import { useEffect } from 'react';
// import * as yup from 'yup';
// import { Toaster } from 'react-hot-toast';

// const updateUserValidationSchema = yup.object().shape({
// 	gender: yup.string().required(),
// 	name: yup.string().max(32, 'Max length 32'),
// 	email: yup.string().email('Enter a valid email'),
// 	oldPassword: yup.string().min(8, 'Min length 8').max(64, 'Max length 64'),
// 	// .when('newPassword', (newPassword, field) =>
// 	// 	newPassword[0] ? field.required() : field),
// 	newPassword: yup.string().min(8, 'Min length 8').max(64, 'Max length 64'),
// 	// .nullable()
// 	// .test(
// 	// 	'differentPassword',
// 	// 	'The new password must differ from the old one.',
// 	// 	function (value) {
// 	// 		const oldPassword = this.resolve(yup.ref('oldPassword'));
// 	// 		return !oldPassword || value !== oldPassword;
// 	// 	}
// 	// ),
// 	repeatPassword: yup.string().min(8, 'Min length 8').max(64, 'Max length 64'),
// 	// .test('commonPassword', 'Passwords do not match.', function (value) {
// 	// 	const newPassword = this.resolve(yup.ref('newPassword'));
// 	// 	return !newPassword || String(value) === String(newPassword);
// 	// }),
// });

const INITIAL_VALUES = {
	// gender: userProfile.gender,
	// name: userProfile.userName,
	// email: userProfile.email,
	gender: '',
	name: '',
	email: '',
	oldPassword: '',
	newPassword: '',
	repeatPassword: '',
};

const SettingModal = ({ onClose, isOpen }) => {
	useEffect(() => {
		const handleKeyDown = e => {
			if (e.key === 'Escape') {
				onClose();
			}
		};

		if (isOpen) {
			document.addEventListener('keydown', handleKeyDown);
		}

		return () => {
			document.removeEventListener('keydown', handleKeyDown);
		};
	}, [isOpen, onClose]);

	const handleBackdropClick = e => {
		if (e.target === e.currentTarget) {
			onClose();
		}
	};

	const handleSubmit = (values, actions) => {
		console.log(values);
		// dispatch(***(values))
		// .unwrap()
		// .then(() => {
		// 	console.log();
		// })
		// .catch(() => {
		// 	console.log();
		// 	toast.error();
		// });
		actions.resetForm();
	};

	if (!isOpen) return null;

	return (
		<div className={css.backdrop} onClick={handleBackdropClick}>
			<div className={css.settingModal}>
				{/* settingTitle & closeBtn */}
				<div className={css.modalTitle}>
					<h2 className={css.title}>Setting</h2>
					<button className={css.closeBtn} onClick={onClose}>
						X
					</button>
				</div>
				{/* updateUserPhoto */}
				<UpdateAvatar />
				{/* updateUserData & passwordСhange */}
				<div>
					<Formik
						// validationSchema={updateUserValidationSchema}
						initialValues={INITIAL_VALUES}
						onSubmit={handleSubmit}
					>
						<Form>
							<div className={css.containerForm}>
								{/* updateUserDataDiv */}
								<div className={css.containerFormFirst}>
									<div>
										<p className={css.fontOne}>Your gender identity</p>
										<div className={css.radio}>
											<label>
												<Field type="radio" name="gender" value="Woman" />
												<span
													style={{ marginLeft: '8px' }}
													className={css.fontTwo}
												>
													Woman
												</span>
											</label>
											<label>
												<Field type="radio" name="gender" value="Man" />
												<span
													style={{ marginLeft: '8px' }}
													className={css.fontTwo}
												>
													Man
												</span>
											</label>
										</div>
									</div>
									<div>
										<p className={css.fontOne}>Your name</p>
										<label>
											<Field
												type="text"
												name="name"
												placeholder="name"
												className={css.input}
											/>
										</label>
									</div>
									<div>
										<p className={css.fontOne}>E-mail</p>
										<label>
											<Field
												type="text"
												name="email"
												placeholder="email"
												className={css.input}
											/>
										</label>
									</div>
								</div>
								{/* passwordСhangeDiv */}
								<div className={css.containerFormSecond}>
									<h3 className={css.fontOne}>Password</h3>
									<div>
										<p className={css.fontTwo}>Outdated password:</p>
										<label>
											<Field
												className={css.input}
												type="text"
												name="oldPassword"
												placeholder="Password"
											/>
										</label>
									</div>
									<div>
										<p className={css.fontTwo}>New Password:</p>
										<label>
											<Field
												className={css.input}
												type="text"
												name="newPassword"
												placeholder="Password"
											/>
										</label>
									</div>
									<div>
										<p className={css.fontTwo}>Repeat new password:</p>
										<label>
											<Field
												className={css.input}
												type="text"
												name="repeatPassword"
												placeholder="Password"
											/>
										</label>
									</div>
								</div>
								<button className={css.saveBtn} type="submit">
									Save
								</button>
							</div>
						</Form>
					</Formik>
					{/* <Toaster position="top-center" reverseOrder={false} /> */}
				</div>
			</div>
		</div>
	);
};

export default SettingModal;
