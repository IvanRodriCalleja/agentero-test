import { call, put, takeLatest, spawn } from 'redux-saga/effects';
import {
	updateArtistDone,
	updateArtistRequest,
	updateArtistError
} from '../actions/updateArtist';
import { updateArtists as updateArtistsService } from 'services';
import { getArtistsAction } from './getArtists';

function* updateArtistAction(action) {
	try {
		yield call(updateArtistsService, action.payload);
		yield put(updateArtistDone());
		yield spawn(getArtistsAction);
	} catch (error) {
		yield put(updateArtistError(error));
	}
}

export default function* updateArtist() {
	yield takeLatest(updateArtistRequest, updateArtistAction);
}
