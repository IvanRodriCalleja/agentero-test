import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import { RigthPanel } from '../shared/RigthPanel';
import { ArtistEdit } from './shared/ArtistEdit';

const defaultArtist = {
	name: '',
	stageName: '',
	image: ''
};

export const CreateArtist = ({ isCreating, onSubmit, onCancel }) => {
	const [newArtist, setNewArtist] = useState(defaultArtist);
	useEffect(() => {
		setNewArtist(defaultArtist);
	}, [isCreating]);

	const handleSubmit = event => {
		event.preventDefault();
		onSubmit(newArtist);
	};
	const [t] = useTranslation();
	return (
		<RigthPanel
			isOpen={isCreating}
			title={t('createArtist.title')}
			onSubmit={handleSubmit}
			onCancel={onCancel}>
			<ArtistEdit artist={newArtist} updateArtist={setNewArtist} />
		</RigthPanel>
	);
};
