import React from 'react';
import { hot } from 'react-hot-loader';

import { Router } from './Router';
import { ErrorBoundary } from './shared/ErrorBoundary';

const Root = () => <ErrorBoundary WrappedComponent={Router} />;

export default hot(module)(Root);
