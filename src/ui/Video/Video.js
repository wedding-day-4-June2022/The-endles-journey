import React from 'react';
import Blue from './BlueJoy.mp4';

import { connect } from 'react-redux';

import css from './Video.module.css';

function Video({ idCard, arrCountres }) {
	return (
		<div className={css.block} id='home'>
			<video loop className={css.video} autoPlay muted src={Blue}></video>
			<div className={css.box}>
				<h2 className={css.h2}>
					{idCard ? arrCountres[idCard].name : 'The endles journey'}{' '}
				</h2>
			</div>
			{idCard ? (
				<div className={css.flagBlock}>
					<img src={arrCountres[idCard].flag} alt='' className={css.flagImg} />
				</div>
			) : null}
		</div>
	);
}

const mapStateToProps = (state) => {
	return {
		idCard: state.cardReducer.idCard,
		arrCountres: state.countresReducer,
	};
};
const mapDispatchToProps = (dispatch) => {
	return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Video);
