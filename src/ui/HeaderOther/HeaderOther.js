import React from 'react';
import css from './HeaderOther.module.css';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

function HeaderOther({ setNum, num }) {
	return (
		<div className={css.block}>
			{num === 0 || num ? (
				<NavLink to='/other' onClick={() => setNum(undefined)}>
					Назад
				</NavLink>
			) : null}
			<NavLink to='/'>На гланую</NavLink>
		</div>
	);
}

const mapStateToProps = (state) => {
	return {};
};

export default connect(mapStateToProps, null)(HeaderOther);
