import React from 'react';

import css from './ListCountrys.module.css';
import CardCountry from '../../components/CardCountry';
// import SuccsessModal from '../../pages/SuccsessModal/SuccsessModal';

const ListCountrys = () => {
	return (
		<div>
			<div className={css.popular}>
				{/* {nameCountry ? <SuccsessModal nameCountry={nameCountry} /> : null} */}
				<CardCountry />
			</div>
		</div>
	);
};

export default ListCountrys;
