import React from 'react';

import Header from '../ui/Header/Header';
import Video from '../ui/Video/Video';
import Converter from '../ui/Converter/Converter';
import CountryDescription from '../ui/CountryDiscribtion/CountryDescription';

import { connect } from 'react-redux';

function Main({ idCard }) {
	return (
		<div>
			<Header />
			<Video />
			{idCard ? <CountryDescription key={Math.random()} /> : null}
			{idCard ? <Converter /> : null}
		</div>
	);
}

const mapStateToProps = (state) => {
	return {
		idCard: state.cardReducer.idCard,
	};
};

export default connect(mapStateToProps, null)(Main);
