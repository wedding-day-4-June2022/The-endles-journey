import React from 'react';

import css from './Map.module.css';

const Map = ({ mapOfModal, mapOfCounty }) => {
	if (mapOfModal) {
		return <div className={css.modalMap}>{mapOfModal}</div>;
	} else {
		return (
			<div className={css.block} id='about'>
				{mapOfCounty}
			</div>
		);
	}
};

export default Map;
