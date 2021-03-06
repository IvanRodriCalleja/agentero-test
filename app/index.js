import '@babel/polyfill';

import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import createSagaMiddleware from 'redux-saga';
import { Provider } from 'react-redux';
import { I18nextProvider } from 'react-i18next';
import { createStore, applyMiddleware, compose } from 'redux';

import i18n from './i18n';

import Root from './Root';
import reducers from './reducers';
import { sagas } from './sagas';
import { Loading } from './shared/Loading';
import 'styles/reset.scss';
import 'styles/global.scss';

const composeEnhacers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];

const store = createStore(
	reducers,
	composeEnhacers(applyMiddleware(...middlewares))
);

sagas.map(saga => sagaMiddleware.run(saga));

const render = Component => {
	ReactDOM.render(
		<Provider store={store}>
			<I18nextProvider i18n={i18n}>
				<Suspense fallback={<Loading />}>
					<Component />
				</Suspense>
			</I18nextProvider>
		</Provider>,
		document.getElementById('app')
	);
};

render(Root);
