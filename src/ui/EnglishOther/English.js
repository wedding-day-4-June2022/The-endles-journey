import React from 'react';

import { connect } from 'react-redux';

function English({ setNum }) {
	return (
		<div>
			<h1>English</h1>
			<button onClick={() => setNum(undefined)}> back</button>
		</div>
	);
}

const mapStateToProps = (state) => {
	return {};
};

export default connect(mapStateToProps, null)(English);
