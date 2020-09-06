import React from 'react';

import Header from '../ui/Header/Header';
import Video from '../ui/Video/Video';
import Converter from '../ui/Converter/Converter';
import CountryDescription from '../ui/CountryDiscribtion/CountryDescription';

import { connect } from 'react-redux';
import Map from '../ui/Map/Map';

function Main({ idCard, mapOfCountyArr }) {
	return (
		<div>
			<Header />
			<Video />
			{idCard ? <CountryDescription key={Math.random()} /> : null}
			{idCard ? <Converter /> : null}
			{idCard ? <Map mapOfCounty={mapOfCountyArr[idCard].mapOfCounty} /> : null}
		</div>
	);
}

const mapStateToProps = (state) => {
	return {
		idCard: state.cardReducer.idCard,
		mapOfCountyArr: state.countresReducer,
	};
};

export default connect(mapStateToProps, null)(Main);
