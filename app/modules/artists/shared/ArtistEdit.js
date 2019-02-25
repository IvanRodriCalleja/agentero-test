import React from 'react';
import { useTranslation } from 'react-i18next';

import { InputText } from 'app/modules/shared/InputText';
import { InputImage } from 'app/modules/shared/InputImage';

export const ArtistEdit = ({ artist, updateArtist }) => {
	const [t] = useTranslation();
	return artist ? (
		<div>
			<InputImage
				placeholder={t('artistEdit.dropImage')}
				value={artist.image}
				onChange={image => updateArtist({ ...artist, image })}
			/>
			<InputText
				placeholder={t('artistEdit.name')}
				value={artist.name}
				onChange={event =>
					updateArtist({ ...artist, name: event.target.value })
				}
			/>
			<InputText
				placeholder={t('artistEdit.stageName')}
				value={artist.stageName}
				onChange={event =>
					updateArtist({ ...artist, stageName: event.target.value })
				}
			/>
		</div>
	) : null;
};
