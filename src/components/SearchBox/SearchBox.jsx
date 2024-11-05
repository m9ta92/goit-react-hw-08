import css from './SearchBox.module.css';
import { GrClearOption } from 'react-icons/gr';

import { useDispatch, useSelector } from 'react-redux';
import { selectFilteredSearchQuery } from '../../redux/filters/selectors';
import { changeFilter } from '../../redux/filters/slice';

const SearchBox = () => {
	const dispatch = useDispatch();
	const filter = useSelector(selectFilteredSearchQuery);

	const handleFilterChange = e => {
		dispatch(changeFilter(e.target.value));
	};

	const handleFilterReset = () => {
		dispatch(changeFilter(''));
	};

	return (
		<div className={css.container}>
			<h2 className={css.title}>Find contacts</h2>
			<label className={css.form}>
				<input
					className={css.input}
					type="text"
					placeholder="Search by name or number"
					value={filter}
					onChange={handleFilterChange}
				/>
				<button className={css.btn} onClick={handleFilterReset}>
					<GrClearOption />
				</button>
			</label>
		</div>
	);
};

export default SearchBox;
