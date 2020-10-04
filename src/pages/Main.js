import React from 'react';

import HeaderMain from '../ui/HeaderMain/HeaderMain';
import Video from '../ui/Video/Video';
import Converter from '../ui/Converter/Converter';
import CountryDescription from '../ui/CountryDiscribtion/CountryDescription';

import { connect } from 'react-redux';
import Map from '../ui/Map/Map';

function Main({ idCard, mapOfCountyArr }) {
	return (
		<div>
			<HeaderMain />
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
