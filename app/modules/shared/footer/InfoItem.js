import React from 'react';

import { item, pairInfoLabel, pairInfoText } from './infoItem.scss';

export const InfoItem = ({ label, text }) => (
	<li className={item}>
		<span className={pairInfoLabel}>{label}</span>
		<span className={pairInfoText}>{text}</span>
	</li>
);
