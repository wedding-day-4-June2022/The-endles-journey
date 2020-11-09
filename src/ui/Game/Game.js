import React from 'react';

import { connect } from 'react-redux';

function Game({ setNum }) {
	return (
		<div>
			<h1>GAME</h1>
			<button onClick={() => setNum(undefined)}> back</button>
		</div>
	);
}

const mapStateToProps = (state) => {
	return {};
};

export default connect(mapStateToProps, null)(Game);
