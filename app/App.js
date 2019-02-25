import React, { Fragment } from 'react';

import { Header } from './modules/shared/Header';
import { Footer } from './modules/shared/Footer';
import './app.scss';

export const App = ({ children }) => (
	<Fragment>
		<Header />
		<main>{children}</main>
		<Footer />
	</Fragment>
);
