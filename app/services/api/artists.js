import { fakeServer } from '../fakeServer';

const artistsKey = 'artistsKey';

export const getArtists = fakeServer(() => {
	const artists = JSON.parse(localStorage.getItem(artistsKey));
	return artists || [];
});

export const addArtists = fakeServer(artist => {
	const artists = JSON.parse(localStorage.getItem(artistsKey)) || [];
	const newArtist = { ...artist, id: Math.random() };
	localStorage.setItem(artistsKey, JSON.stringify([...artists, newArtist]));
	return newArtist;
});

export const deleteArtists = fakeServer(artistId => {
	const artists = JSON.parse(localStorage.getItem(artistsKey)) || [];
	const newArtists = artists.filter(({ id }) => id !== artistId) || [];
	localStorage.setItem(artistsKey, JSON.stringify(newArtists));
});

export const updateArtists = fakeServer(updatedArtist => {
	const artists = JSON.parse(localStorage.getItem(artistsKey)) || [];
	const newArtists =
		artists.map(artist =>
			updatedArtist.id === artist.id ? updatedArtist : artists
		) || [];

	localStorage.setItem(artistsKey, JSON.stringify(newArtists));
});
