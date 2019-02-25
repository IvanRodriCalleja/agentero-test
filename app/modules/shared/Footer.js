import React from 'react';
import { useTranslation } from 'react-i18next';

import { InfoItems } from './footer/InfoItems';
import { InfoItem } from './footer/InfoItem';

import './footer.scss';

export const Footer = () => {
	const [t] = useTranslation();
	return (
		<footer>
			<InfoItems>
				<InfoItem
					label={t('footer.createdBy')}
					text={'Iván Rodríguez Calleja'}
				/>
				<InfoItem
					label={t('footer.contact')}
					text={'ivanrodricalleja@gmail.com'}
				/>
			</InfoItems>
		</footer>
	);
};
