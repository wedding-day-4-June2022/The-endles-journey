import React from 'react';

import { connect } from 'react-redux';

function SaveCountres({ setNum }) {
	return (
		<div>
			<h1>SaveCountres</h1>
			<button onClick={() => setNum(undefined)}> back</button>
		</div>
	);
}

const mapStateToProps = (state) => {
	return {};
};

export default connect(mapStateToProps, null)(SaveCountres);
