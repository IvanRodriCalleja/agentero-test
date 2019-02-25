import React, { Fragment } from 'react';
import { useTranslation } from 'react-i18next';

export const Translate = ({ i18nKey }) => {
	const [t] = useTranslation();
	return <Fragment>{t(i18nKey)}</Fragment>;
};
