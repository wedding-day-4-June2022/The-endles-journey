import React from 'react';
import css from './HeaderOther.module.css';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

function HeaderOther() {
	return (
		<div className={css.block}>
			<NavLink to='/'>На гланую</NavLink>
		</div>
	);
}

const mapStateToProps = (state) => {
	return {};
};

export default connect(mapStateToProps, null)(HeaderOther);
