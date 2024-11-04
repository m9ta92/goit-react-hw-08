import css from './Contact.module.css';

import { TbUserFilled } from 'react-icons/tb';
import { TbPhoneFilled } from 'react-icons/tb';
import Modal from '../Modal/Modal';
import { useState } from 'react';

const Contact = ({ id, name, number }) => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const openModal = () => setIsModalOpen(true);
	const closeModal = () => setIsModalOpen(false);

	return (
		<>
			<div className={css.item}>
				<div>
					<div className={css.title}>
						<TbUserFilled />
						<p>{name}</p>
					</div>
					<div className={css.title}>
						<TbPhoneFilled className={css.phone} />
						<a href="tel:">{number}</a>
					</div>
				</div>
				<button className={css.deleteBtn} onClick={openModal}>
					❌
				</button>
			</div>
			<Modal isOpen={isModalOpen} onClose={closeModal} id={id} name={name} />
		</>
	);
};

export default Contact;
