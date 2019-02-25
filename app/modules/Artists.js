import React, { useEffect, useState, Fragment, memo } from 'react';
import { useTranslation } from 'react-i18next';

import { Artist } from './artists/Artist';
import { CreateArtist } from './artists/CreateArtist';
import { EditArtist } from './artists/EditArtist';
import { addButton, artistsGrid } from './artists.scss';

export const Artists = memo(
	({ artists, getArtists, addArtist, deleteArtists, updateArtist }) => {
		useEffect(() => {
			setValue({ isCreating: false, artistEdit: null });
		}, [artists]);

		useEffect(() => {
			getArtists();
		}, []);
		const [t] = useTranslation();
		const [value, setValue] = useState({ isCreating: false, artistEdit: null });
		const onHandleCancel = () =>
			setValue({ isCreating: false, artistEdit: null });
		const onHandleEdit = artist =>
			setValue({ isCreating: false, artistEdit: artist });

		return (
			<Fragment>
				<div className={artistsGrid}>
					{artists &&
						artists.map(artist => (
							<Artist
								artist={artist}
								key={artist.name}
								deleteArtists={() => deleteArtists(artist.id)}
								editArtist={() => onHandleEdit(artist)}
							/>
						))}
				</div>
				<button
					title={t('artists.add')}
					className={addButton}
					onClick={() => setValue({ isCreating: true, artistEdit: null })}>
					+
				</button>
				<CreateArtist
					onSubmit={addArtist}
					isCreating={value.isCreating}
					onCancel={onHandleCancel}
				/>
				<EditArtist
					artist={value.artistEdit}
					onSubmit={updateArtist}
					isCreating={value.artistEdit !== null}
					onCancel={onHandleCancel}
					setEditArtist={onHandleEdit}
				/>
			</Fragment>
		);
	}
);
