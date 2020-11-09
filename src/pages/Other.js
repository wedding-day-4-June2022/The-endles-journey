import React, { useState } from 'react';

import { connect } from 'react-redux';

import DisplayOther from '../ui/DisplayOther/DisplayOther';
import HeaderOther from '../ui/HeaderOther/HeaderOther';
import Game from '../ui/Game/Game';
import English from '../ui/EnglishOther/English';
import SaveCountres from '../ui/SaveCountres/SaveCountres';

function Other() {
	const [num, setNum] = useState(undefined);
	const data = [
		{ name: 'Игры на знание стран', bgc: '', path: 'game' },
		{ name: 'Вспомнить Английский', bgc: '', path: 'english' },
		{ name: 'Сохраненные вами страны', bgc: '', path: 'yourCountres' },
	];

	return (
		<div>
			<HeaderOther />
			{num === undefined ? <DisplayOther data={data} setNum={setNum} /> : null}

			{num === 0 && num !== undefined ? <Game setNum={setNum} /> : null}
			{num === 1 && num !== undefined ? <English setNum={setNum} /> : null}
			{num === 2 && num !== undefined ? <SaveCountres setNum={setNum} /> : null}
		</div>
	);
}

const mapStateToProps = (state) => {
	return {};
};

export default connect(mapStateToProps, null)(Other);
