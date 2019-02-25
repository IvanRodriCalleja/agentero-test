import { createReducer } from 'redux-act';
import { getArtistsDone } from '../actions/getArtists';

const defaultArtistsState = [];

export default createReducer(
	{
		[getArtistsDone]: (_, payload) => payload
	},
	defaultArtistsState
);
