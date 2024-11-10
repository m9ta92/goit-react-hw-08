import { useDispatch } from 'react-redux';
import css from './Modal.module.css';
import { deleteContact } from '../../redux/contacts/operations';
import toast from 'react-hot-toast';

const Modal = ({ id, name, onClose, isOpen }) => {
	const dispatch = useDispatch();

	const omg = () => {
		dispatch(deleteContact(id));
		toast.success(`${name} deleted successfully`);
	};

	if (!isOpen) return null;

	return (
		<div className={css.backdrop}>
			<div className={css.modal}>
				<p className={css.title}>
					<span style={{ color: 'red' }}>Delete </span>
					<span style={{ borderBottom: '1px solid white' }}>{name}</span> ?
				</p>
				<div className={css.btns}>
					<button className={css.yesBtn} onClick={omg}>
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
