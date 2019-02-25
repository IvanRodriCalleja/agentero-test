import { createAction } from 'redux-act';

const GET_ARTISTS_REQUEST = 'GET_ARTISTS_REQUEST';
const GET_ARTISTS_DONE = 'GET_ARTISTS_DONE';
const GET_ARTISTS_ERROR = 'GET_ARTISTS_ERROR';

const getArtistsRequest = createAction(GET_ARTISTS_REQUEST);
const getArtistsDone = createAction(GET_ARTISTS_DONE);
const getArtistsError = createAction(GET_ARTISTS_ERROR);

export { getArtistsRequest, getArtistsDone, getArtistsError };
