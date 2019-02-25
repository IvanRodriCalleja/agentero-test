import addArtists from './sagas/addArtist';
import getArtists from './sagas/getArtists';
import deleteArtist from './sagas/deleteArtist';
import updateArtist from './sagas/updateArtist';
import artists from './reducers/artists';

export default {
	sagas: [getArtists, addArtists, deleteArtist, updateArtist],
	reducers: { artists }
};
