import artists from './artists';

export default {
	sagas: [...artists.sagas],
	reducers: { ...artists.reducers }
};
