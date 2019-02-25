import React from 'react';
import { useTranslation } from 'react-i18next';

import { RigthPanel } from '../shared/RigthPanel';
import { ArtistEdit } from './shared/ArtistEdit';

export const EditArtist = ({
	isCreating,
	artist,
	onCancel,
	onSubmit,
	setEditArtist
}) => {
	const [t] = useTranslation();
	const handleSubmit = event => {
		event.preventDefault();
		onSubmit(artist);
	};
	return (
		<RigthPanel
			isOpen={isCreating}
			title={t('createArtist.title')}
			onSubmit={handleSubmit}
			onCancel={onCancel}>
			<ArtistEdit artist={artist} updateArtist={setEditArtist} />
		</RigthPanel>
	);
};
