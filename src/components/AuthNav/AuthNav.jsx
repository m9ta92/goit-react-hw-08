import clsx from 'clsx';
import css from './AuthNav.module.css';

import { NavLink } from 'react-router-dom';

const cssClasses = ({ isActive }) => clsx(isActive && css.active) || css.link;

export const AuthNav = () => {
	return (
		<div>
			<NavLink className={cssClasses} to="/register">
				Register
			</NavLink>
			<NavLink className={cssClasses} to="/login">
				Log In
			</NavLink>
		</div>
	);
};
