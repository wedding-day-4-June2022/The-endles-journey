import React, { useState } from 'react';
import css from './Game.module.css';
import { connect } from 'react-redux';
import Quiz from '../../components/Quiz/Quiz';

function Game({ data, countryReducer }) {
	const [num, setNum] = useState(true);
	const [arr, setArr] = useState(data.quizFlag);
	console.log(data, 'data');

	const getNameCountry = (e) => {
		let res = countryReducer.find((el) => {
			return el.name === e.target.textContent;
		});
		setArr(res.quiz);
		setNum(false);
	};

	return (
		<div>
			{num ? (
				<div className={css.blockYourCountry}>
					<p>Тест на знание ваших выбранных стран:</p>
					{Array.from(data.yourSaveCountres).map((el, index) => {
						return (
							<div
								className={css.yourCountry}
								onClick={getNameCountry}
								key={index}
							>
								{el}
							</div>
						);
					})}
					<div
						className={css.default}
						onClick={() => {
							setNum(false);
						}}
					>
						Тест по всем странам!
					</div>
				</div>
			) : (
				<Quiz arr={arr} />
			)}
		</div>
	);
}

const mapStateToProps = (state) => {
	return {};
};

export default connect(mapStateToProps, null)(Game);
