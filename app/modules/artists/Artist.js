import React from 'react';

import { SvgSpriteImage } from 'app/shared/SvgSpriteImage';
import { artistCard, actions, icon } from './artist.scss';
import rubbishIcon from 'assets/images/rubbish.svg';
import editIcon from 'assets/images/edit.svg';

export const Artist = ({
	artist: { image, name, stageName },
	deleteArtists,
	editArtist
}) => (
	<article className={artistCard}>
		<figure>
			<img src={image} alt={stageName} />
			<figcaption>
				<h2>{stageName}</h2>
				<p>{name}</p>
			</figcaption>
			<div className={actions}>
				<SvgSpriteImage
					onClick={deleteArtists}
					svg={rubbishIcon}
					className={icon}
				/>
				<SvgSpriteImage svg={editIcon} className={icon} onClick={editArtist} />
			</div>
		</figure>
	</article>
);
