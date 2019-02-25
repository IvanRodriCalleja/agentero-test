import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import { App } from './app';
import { ArtistsContainer } from './modules/ArtistsContainer';
import { Genres } from './modules/Genres';

export const Router = () => (
	<BrowserRouter>
		<App>
			<Switch>
				<Redirect exact from={'/'} to={'/artists'} />
				<Route exact path={'/artists'} component={ArtistsContainer} />
				<Route exact path={'/genres'} component={Genres} />
			</Switch>
		</App>
	</BrowserRouter>
);
