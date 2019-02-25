import { call, put, takeLatest, spawn } from 'redux-saga/effects';
import {
	deleteArtistDone,
	deleteArtistError,
	deleteArtistRequest
} from '../actions/deleteArtist';
import { deleteArtists as deleteArtistsService } from 'services';
import { getArtistsAction } from './getArtists';

function* deleteArtistAction(action) {
	try {
		yield call(deleteArtistsService, action.payload);
		yield put(deleteArtistDone());
		yield spawn(getArtistsAction);
	} catch (error) {
		yield put(deleteArtistError(error));
	}
}

export default function* deleteArtist() {
	yield takeLatest(deleteArtistRequest, deleteArtistAction);
}
