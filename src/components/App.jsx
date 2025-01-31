import { useState } from 'react';
import SettingModal from './Modals/SettingModal/SettingModal';

const App = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const openModal = () => setIsModalOpen(true);
	const closeModal = () => setIsModalOpen(false);

	return (
		<>
			<div>
				<button onClick={openModal} type="button">
					Setting
				</button>
			</div>
			<SettingModal isOpen={isModalOpen} onClose={closeModal} />
		</>
	);
};

export default App;
