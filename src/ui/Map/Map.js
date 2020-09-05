import React from 'react';

import css from './Map.module.css';

const Map = ({ mapOfModal, mapOfCounty }) => {
	console.log(mapOfModal, 'mapOfModal');
	console.log(mapOfCounty, 'mapOfCounty');
	return (
		<div className={css.block} id='about'>
			{mapOfModal ? mapOfModal : mapOfCounty}
		</div>
	);
};

export default Map;
