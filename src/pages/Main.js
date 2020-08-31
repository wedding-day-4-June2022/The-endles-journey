import React from 'react';

import Header from '../ui/Header/Header';
import Video from '../ui/Video/Video';
import Converter from '../ui/Converter/Converter';
import CountryDescription from '../ui/CountryDiscribtion/CountryDescription';
import Accordion from '../ui/Accordion/Accordion';

import { connect } from 'react-redux';

function Main({ idCard }) {
	return (
		<div>
			<Header />
			<Video />
			{idCard ? <CountryDescription key={Math.random()} /> : null}
			{idCard ? <Converter /> : null}
			{idCard ? <Accordion /> : null}
		</div>
	);
}

const mapStateToProps = (state) => {
	console.log(state.cardReducer, 'state Main');
	return {
		idCard: state.cardReducer.idCard,
	};
};

export default connect(mapStateToProps, null)(Main);
