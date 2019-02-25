import { createAction } from 'redux-act';

const UPDATE_ARTIST_REQUEST = 'UPDATE_ARTIST_REQUEST';
const UPDATE_ARTIST_DONE = 'UPDATE_ARTIST_DONE';
const UPDATE_ARTIST_ERROR = 'UPDATE_ARTIST_ERROR';

const updateArtistRequest = createAction(UPDATE_ARTIST_REQUEST);
const updateArtistDone = createAction(UPDATE_ARTIST_DONE);
const updateArtistError = createAction(UPDATE_ARTIST_ERROR);

export { updateArtistRequest, updateArtistDone, updateArtistError };
