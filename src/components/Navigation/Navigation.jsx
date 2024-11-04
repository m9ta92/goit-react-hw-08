import css from './Navigation.module.css';

import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import clsx from 'clsx';

const cssClasses = ({ isActive }) => clsx(isActive && css.active) || css.link;

export const Navigation = () => {
	const isLoggedIn = useSelector(selectIsLoggedIn);

	return (
		<nav>
			<NavLink className={cssClasses} to="/">
				Home
			</NavLink>
			{isLoggedIn && (
				<NavLink className={cssClasses} to="/contacts">
					Contacts
				</NavLink>
			)}
		</nav>
	);
};
