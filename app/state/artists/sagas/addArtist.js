import { call, put, takeLatest, spawn } from 'redux-saga/effects';
import {
	addArtistDone,
	addArtistError,
	addArtistRequest
} from '../actions/addArtist';
import { addArtists as addArtistsService } from 'services';
import { getArtistsAction } from './getArtists';

function* addArtistAction(action) {
	try {
		const artist = yield call(addArtistsService, action.payload);
		yield put(addArtistDone(artist));
		yield spawn(getArtistsAction);
	} catch (error) {
		yield put(addArtistError(error));
	}
}

export default function* addArtist() {
	yield takeLatest(addArtistRequest, addArtistAction);
}
