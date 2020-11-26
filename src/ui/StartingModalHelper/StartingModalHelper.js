import React, { useEffect, useState } from 'react';
import css from './StartingModalHelper.module.css';

import { connect } from 'react-redux';
import ModalHelper from '../../components/ModalHelper/ModalHelper';

const StartingModalHelper = ({ setHelper }) => {
	const [iter, setIter] = useState(0);
	console.log(iter);
	const arr = [
		'Добро пожаловать на наш скромный портал о путешествиях. Здесь вы найдете исчерпывающую информацию обо всех предложенных странах!',
		'Кнопка "Все страны", позволяет вам выбрать любую из предложенных и окунуться в ее изучение',
		'Кнопка "Другое", переведет вас на страницу с играми по странам, небольшому тесту по Английскому и что то еще)',
	];
	if (iter > arr.length - 1) {
		setHelper(false);
	}

	return (
		<div className={css.block}>
			<div className={css.container}>
				<div className={css.startText}>
					<ModalHelper item={arr[iter]} iter={iter} />
				</div>

				<div className={css.buttons}>
					<button onClick={() => setIter(iter + 1)}> К следующему шагу</button>
					<button onClick={() => setHelper(false)}>
						{' '}
						Пропустить рекомендации
					</button>
				</div>
			</div>
		</div>
	);
};

const mapStateToProps = (state) => {
	return {};
};
const mapDispatchToProps = (dispatch) => {
	return {};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(StartingModalHelper);
