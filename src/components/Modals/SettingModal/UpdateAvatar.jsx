import css from './SettingModal.module.css';
import { useState } from 'react';

const UpdateAvatar = () => {
	const [image, setImage] = useState(null);

	const handleImageChange = event => {
		const file = event.target.files?.[0]; // Перевіряємо чи існує файл
		if (!file) return; // Якщо файлу немає, виходимо

		const reader = new FileReader();
		reader.onloadend = () => {
			setImage(reader.result);
		};
		reader.readAsDataURL(file);
	};

	return (
		<div className={css.containerYourPhoto}>
			<h3 className={css.fontOne}>Your photo</h3>
			<div className={css.uploadContainer}>
				{image ? (
					<img className={css.userPhoto} src={image} width={80} height={80} />
				) : (
					'?'
				)}
				<div>
					<label className={css.uploadBtn} htmlFor="file-upload">
						Upload a photo
					</label>
					<input
						id="file-upload"
						type="file"
						accept="image/*"
						onChange={handleImageChange}
						style={{ display: 'none' }}
					/>
				</div>
			</div>
		</div>
	);
};

export default UpdateAvatar;
