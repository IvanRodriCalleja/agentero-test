import { Artists } from './Artists';
import { connect } from 'react-redux';
import { getArtistsRequest } from 'state/artists/actions/getArtists';
import { addArtistRequest } from 'state/artists/actions/addArtist';
import { deleteArtistRequest } from 'state/artists/actions/deleteArtist';
import { updateArtistRequest } from 'state/artists/actions/updateArtist';

const mapStateToProps = ({ artists }) => ({ artists });

const mapDispatchToProps = dispatch => ({
	getArtists: () => dispatch(getArtistsRequest()),
	addArtist: artist => dispatch(addArtistRequest(artist)),
	deleteArtists: artistId => dispatch(deleteArtistRequest(artistId)),
	updateArtist: artist => dispatch(updateArtistRequest(artist))
});

export const ArtistsContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(Artists);
