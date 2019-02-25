import React from 'react';

import { infoItemsaContainer } from './infoItems.scss';

export const InfoItems = ({ children }) => (
	<ul className={infoItemsaContainer}>{children}</ul>
);
