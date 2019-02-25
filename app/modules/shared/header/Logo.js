import React from 'react';
import { Link } from 'react-router-dom';

import { SvgSpriteImage } from 'app/shared/SvgSpriteImage';
import logoApp from 'assets/images/musicLogo.svg';
import { logo } from './logo.scss';

export const Logo = () => (
	<Link to={'/'}>
		<SvgSpriteImage svg={logoApp} className={logo} />
	</Link>
);
