import css from './HomePage.module.css';

const HomePage = () => {
	return (
		<>
			<div className={css.container}>
				<h1 className={css.title}>
					<span style={{ color: 'red' }}>Welcome </span>
					<span style={{ color: 'green' }}>to </span>
					<span style={{ color: 'white' }}>your </span>
					<span style={{ color: 'blue' }}>private </span>
					<span style={{ color: 'purple' }}>phonebook </span>
					<span>🙋‍♂️</span>
				</h1>
			</div>
		</>
	);
};

export default HomePage;
