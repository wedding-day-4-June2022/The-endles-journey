import React, { useState } from 'react';
import css from './ModalHelper.module.css';

import { connect } from 'react-redux';

const ModalHelper = ({ item, iter }) => {
	if (iter === 0) {
		return (
			<div className={css.block}>
				<p>{item}</p>
			</div>
		);
	}
	if (iter === 1) {
		return (
			<div className={css.block2}>
				<p>{item}</p>
			</div>
		);
	}
	if (iter === 2) {
		return (
			<div className={css.block3}>
				<p>{item}</p>
			</div>
		);
	} else {
		return null;
	}
};

const mapStateToProps = (state) => {
	return {};
};
const mapDispatchToProps = (dispatch) => {
	return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalHelper);
