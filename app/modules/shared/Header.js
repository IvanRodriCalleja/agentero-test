import React from 'react';

import { Menu } from './header/Menu';
import { Logo } from './header/Logo';

import './header.scss';

export const Header = () => (
	<header>
		<Logo />
		<Menu />
	</header>
);
