import { call, put, takeLatest } from 'redux-saga/effects';
import {
	getArtistsRequest,
	getArtistsDone,
	getArtistsError
} from '../actions/getArtists';
import { getArtists as getArtistsService } from 'services';

export function* getArtistsAction() {
	try {
		const artists = yield call(getArtistsService);
		yield put(getArtistsDone(artists));
	} catch (error) {
		yield put(getArtistsError(error));
	}
}

export default function* getArtists() {
	yield takeLatest(getArtistsRequest, getArtistsAction);
}
