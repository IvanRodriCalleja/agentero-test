import React from 'react';
import { useTranslation } from 'react-i18next';

import { DEFAULTNAMESPACE, LANGUAGES } from 'app/i18n';

export const LanguageSelector = () => {
	// eslint-disable-next-line no-unused-vars
	const [_, i18n] = useTranslation(DEFAULTNAMESPACE);

	const onLanguageChange = language => i18n.changeLanguage(language);
	return (
		<select
			onChange={event => onLanguageChange(event.target.value)}
			value={i18n.language}>
			{LANGUAGES.map(language => (
				<option value={language} key={language}>
					{language}
				</option>
			))}
		</select>
	);
};
