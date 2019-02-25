import { createAction } from 'redux-act';

const DELETE_ARTIST_REQUEST = 'DELETE_ARTIST_REQUEST';
const DELETE_ARTIST_DONE = 'DELETE_ARTIST_DONE';
const DELETE_ARTIST_ERROR = 'DELETE_ARTIST_ERROR';

const deleteArtistRequest = createAction(DELETE_ARTIST_REQUEST);
const deleteArtistDone = createAction(DELETE_ARTIST_DONE);
const deleteArtistError = createAction(DELETE_ARTIST_ERROR);

export { deleteArtistRequest, deleteArtistDone, deleteArtistError };
