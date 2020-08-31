import React from 'react';

import Header from '../ui/Header/Header';
import Video from '../ui/Video/Video';
import Converter from '../ui/Converter/Converter';
import CountryDescription from '../ui/CountryDiscribtion/CountryDescription';
import Accordion from '../ui/Accordion/Accordion';

function Main() {
	return (
		<div>
			<Header />
			<Video />
			<CountryDescription key={Math.random()} />
			<Converter />
			<Accordion />
		</div>
	);
}

export default Main;
