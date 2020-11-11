import React, { useState } from 'react';

import { connect } from 'react-redux';

import DisplayOther from '../ui/DisplayOther/DisplayOther';
import HeaderOther from '../ui/HeaderOther/HeaderOther';
import Game from '../ui/Game/Game';

import SaveCountres from '../ui/SaveCountres/SaveCountres';
import Quiz from '../components/Quiz/Quiz';

function Other({ data, countryReducer }) {
	const [num, setNum] = useState(undefined);

	return (
		<div>
			<HeaderOther setNum={setNum} num={num} />
			{num === undefined ? <DisplayOther data={data} setNum={setNum} /> : null}

			{num === 0 && num !== undefined ? (
				<Game data={data} countryReducer={countryReducer} />
			) : null}
			{num === 1 && num !== undefined ? <Quiz arr={data.quizEng} /> : null}
			{num === 2 && num !== undefined ? <SaveCountres setNum={setNum} /> : null}
		</div>
	);
}

const mapStateToProps = (state) => {
	return {
		data: state.otherReducer,
		countryReducer: state.countresReducer,
		// idCard: state.cardReducer.idCard,
	};
};

export default connect(mapStateToProps, null)(Other);
