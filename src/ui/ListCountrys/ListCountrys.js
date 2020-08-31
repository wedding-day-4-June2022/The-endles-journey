import React from 'react';

import css from './ListCountrys.module.css';
import CardCountry from '../../components/CardCountry';

const ListCountrys = () => {
	return (
		<div>
			<div className={css.popular}>
				<CardCountry />
			</div>
		</div>
	);
};

export default ListCountrys;
