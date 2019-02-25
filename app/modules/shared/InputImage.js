import React, { useRef } from 'react';

import {
	inputImage,
	image,
	hidden,
	placeholder as placeholderStyle
} from './inputImage.scss';

export const InputImage = ({ value, onChange, placeholder }) => {
	const inputFile = useRef(null);
	const handleDropFile = event => {
		event.preventDefault();
		event.stopPropagation();
		useReader(event.dataTransfer.files[0], onChange);
	};

	const handleInputFile = event => {
		useReader(event.target.files[0], onChange);
	};

	const handleDragOver = event => {
		event.preventDefault();
		event.stopPropagation();
	};

	const handleClick = () => inputFile.current.click();
	return (
		<div
			onClick={handleClick}
			onDrop={handleDropFile}
			className={inputImage}
			onDragOver={handleDragOver}>
			{value !== '' ? (
				<img src={value} className={image} />
			) : (
				<span className={placeholderStyle}>{placeholder}</span>
			)}
			<input type={'text'} required value={value} className={hidden} readOnly />
			<input
				ref={inputFile}
				type={'file'}
				onChange={handleInputFile}
				className={hidden}
			/>
		</div>
	);
};

const useReader = (file, onChange) => {
	const reader = new FileReader();
	reader.onload = function(e) {
		onChange(e.target.result);
	};
	reader.readAsDataURL(file);
};
