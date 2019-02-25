import { createAction } from 'redux-act';

const ADD_ARTIST_REQUEST = 'ADD_ARTIST_REQUEST';
const ADD_ARTIST_DONE = 'ADD_ARTIST_DONE';
const ADD_ARTIST_ERROR = 'ADD_ARTIST_ERROR';

const addArtistRequest = createAction(ADD_ARTIST_REQUEST);
const addArtistDone = createAction(ADD_ARTIST_DONE);
const addArtistError = createAction(ADD_ARTIST_ERROR);

export { addArtistRequest, addArtistDone, addArtistError };
