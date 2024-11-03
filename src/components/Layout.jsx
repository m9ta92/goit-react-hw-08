import { AppBar } from './AppBar/AppBar';

export const Layout = ({ children }) => {
	return (
		<div style={{ maxWidth: 960, margin: '0 auto', padding: '0 16px' }}>
			<AppBar />
			{children}
		</div>
	);
};
