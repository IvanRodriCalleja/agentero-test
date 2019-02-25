import React from 'react';
import ReactDOM from 'react-dom';

import { loader, loader__bar, loader__ball } from './loading.scss';

export const Loading = () =>
	ReactDOM.createPortal(
		<div className={loader}>
			<div className={loader__bar} />
			<div className={loader__bar} />
			<div className={loader__bar} />
			<div className={loader__bar} />
			<div className={loader__bar} />
			<div className={loader__ball} />
		</div>,
		document.getElementById('loading')
	);
