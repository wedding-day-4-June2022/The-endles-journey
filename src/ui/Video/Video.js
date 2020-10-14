import React, { useEffect, useState } from 'react';
import Default from './BlueJoy.mp4';
import Cold from './Aerial.mp4';
import Africa from './africa.mp4';
import Euro from './euro.mp4';

import { connect } from 'react-redux';

import css from './Video.module.css';

function Video({ idCard, arrCountres }) {
	const [move, setMove] = useState(Default);

	const changeMove = () => {
		if (arrCountres[idCard]) {
			if (arrCountres[idCard].partOfTheWorld === 'euro') {
				setMove(Euro);
			} else if (arrCountres[idCard].partOfTheWorld === 'usa') {
				setMove(Cold);
			} else if (arrCountres[idCard].partOfTheWorld === 'afrika') {
				setMove(Africa);
			} else {
				setMove(Default);
			}
		}
	};

	useEffect(() => {
		changeMove();
	});

	return (
		<div className={css.block} id='home'>
			<video loop className={css.video} autoPlay muted src={move}></video>
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
