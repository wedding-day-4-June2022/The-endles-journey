import React, { useState } from 'react';

import { connect } from 'react-redux';

import DisplayOther from '../ui/DisplayOther/DisplayOther';
import HeaderOther from '../ui/HeaderOther/HeaderOther';
import Game from '../ui/Game/Game';
import Quiz from '../components/Quiz/Quiz';
import SaveCountres from '../ui/SaveCountres/SaveCountres';

function Other({ data }) {
	const [num, setNum] = useState(undefined);

	// const arr = [];
	// if (nameCountry) {
	// 	arr.push(nameCountry);
	// }
	// console.log(arr, 'arr');

	return (
		<div>
			<HeaderOther setNum={setNum} num={num} />
			{num === undefined ? <DisplayOther data={data} setNum={setNum} /> : null}

			{num === 0 && num !== undefined ? <Quiz arr={data.quizFlag} /> : null}
			{num === 1 && num !== undefined ? <Quiz arr={data.quizEng} /> : null}
			{num === 2 && num !== undefined ? <SaveCountres setNum={setNum} /> : null}
		</div>
	);
}

const mapStateToProps = (state) => {
	return {
		data: state.otherReducer,
	};
};

export default connect(mapStateToProps, null)(Other);
