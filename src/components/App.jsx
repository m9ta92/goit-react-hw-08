import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense, useEffect } from 'react';
import { Layout } from './Layout';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsRefreshing } from '../redux/auth/selectors';
// import { refreshUser } from '../redux/auth/operations';
import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivateRoute';
import Loader from './Loader/Loader';
import { refreshUser } from '../redux/auth/operations';

const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
const RegistrationPage = lazy(
	() => import('../pages/RegistrationPage/RegistrationPage')
);
const LoginPage = lazy(() => import('../pages/LoginPage/LoginPage'));
const ContactsPage = lazy(() => import('../pages/ContactsPage/ContactsPage'));

const App = () => {
	const dispatch = useDispatch();
	const isRefreshing = useSelector(selectIsRefreshing);

	useEffect(() => {
		dispatch(refreshUser());
	}, [dispatch]);

	return isRefreshing ? (
		<Loader />
	) : (
		<Layout>
			<Suspense fallback={null}>
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route
						path="/register"
						element={
							<RestrictedRoute
								redirectTo="/login"
								component={<RegistrationPage />}
							/>
						}
					/>
					<Route
						path="/login"
						element={
							<RestrictedRoute
								redirectTo="/contacts"
								component={<LoginPage />}
							/>
						}
					/>
					<Route
						path="/contacts"
						element={
							<PrivateRoute redirectTo="/login" component={<ContactsPage />} />
						}
					/>
					<Route path="*" element={<HomePage />} />
				</Routes>
			</Suspense>
		</Layout>
	);
};

export default App;
