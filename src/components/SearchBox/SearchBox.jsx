import css from './SearchBox.module.css';
import { GrClearOption } from 'react-icons/gr';

import { useDispatch, useSelector } from 'react-redux';
import { selectFilteredName } from '../../redux/filters/selectors';
import { changeFilter } from '../../redux/filters/slice';

const SearchBox = () => {
	const dispatch = useDispatch();
	const filter = useSelector(selectFilteredName);

	const handleFilterChange = e => {
		dispatch(changeFilter(e.target.value));
	};

	const handleFilterReset = () => {
		dispatch(changeFilter(''));
	};

	return (
		<div className={css.search}>
			<h4>Find contact by name:</h4>
			<label className={css.form}>
				<input
					className={css.input}
					type="text"
					placeholder="Search contact..."
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
