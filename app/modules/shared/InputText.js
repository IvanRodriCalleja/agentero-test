import React from 'react';

import { input, inputContainer } from './inputText.scss';

export const InputText = ({ value, onChange, placeholder }) => (
	<div className={inputContainer}>
		<input
			placeholder={`${placeholder}...`}
			type={'text'}
			value={value}
			onChange={onChange}
			className={input}
			required
		/>
	</div>
);
