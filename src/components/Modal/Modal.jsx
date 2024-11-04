import { useDispatch } from 'react-redux';
import css from './Modal.module.css';
import { deleteContact } from '../../redux/contacts/operations';

const Modal = ({ id, name, onClose, isOpen }) => {
	const dispatch = useDispatch();
	if (!isOpen) return null;

	return (
		<div className={css.backdrop}>
			<div className={css.modal}>
				<p className={css.title}>Delete {name} ?</p>
				<div className={css.btns}>
					<button
						className={css.yesBtn}
						onClick={() => dispatch(deleteContact(id))}
					>
						YES
					</button>
					<button className={css.noBtn} onClick={onClose}>
						NO
					</button>
				</div>
			</div>
		</div>
	);
};

export default Modal;
