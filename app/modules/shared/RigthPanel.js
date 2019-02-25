import React from 'react';
import { animated, useTransition } from 'react-spring';

import { Translate } from 'app/shared/i18n/Translate';
import {
	rightPanel,
	header,
	formContainer,
	acceptButton,
	cancelButton,
	buttonsContainer
} from './rigthPanel.scss';

export const RigthPanel = ({ isOpen, children, title, onSubmit, onCancel }) => {
	const transitions = useTransition(isOpen, null, {
		from: { transform: 'translateX(300px)', opacity: 0 },
		enter: { transform: 'translateX(0px)', opacity: 1 },
		leave: { transform: 'translateX(300px)', opacity: 0 }
	});
	return transitions.map(({ item, key, props }) =>
		item ? (
			<animated.section className={rightPanel} key={key} style={props}>
				<header className={header}>
					<h3>{title}</h3>
				</header>
				<form onSubmit={onSubmit}>
					<div className={formContainer}>{children}</div>
					<div className={buttonsContainer}>
						<button type={'button'} className={cancelButton} onClick={onCancel}>
							<Translate i18nKey={'rightPanel.cancel'} />
						</button>
						<button type={'submit'} className={acceptButton}>
							<Translate i18nKey={'rightPanel.accept'} />
						</button>
					</div>
				</form>
			</animated.section>
		) : null
	);
};
