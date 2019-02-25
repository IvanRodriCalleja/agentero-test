import React from 'react';

export const SvgSpriteImage = ({ svg, className, onClick }) => (
	<svg onClick={onClick} viewBox={svg.viewBox} className={className}>
		<use xlinkHref={svg.url} />
	</svg>
);
