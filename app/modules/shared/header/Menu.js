import React from 'react';
import { NavLink } from 'react-router-dom';

import { Translate } from 'app/shared/i18n/Translate';
import { active } from './menu.scss';

export const Menu = () => (
	<nav>
		<ul>
			<li>
				<NavLink to={'/artists'} activeClassName={active}>
					<span>
						<Translate i18nKey={'menu.artists'} />
					</span>
				</NavLink>
			</li>
			<li>
				<NavLink to={'/genres'} activeClassName={active}>
					<span>
						<Translate i18nKey={'menu.genres'} />
					</span>
				</NavLink>
			</li>
		</ul>
	</nav>
);
