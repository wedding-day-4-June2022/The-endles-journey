import React, { useState } from 'react';
import css from './English.module.css';
import { connect } from 'react-redux';
import './English.css';

function English({ setNum }) {
	const [iter, setIter] = useState(0);
	const [error, setError] = useState(0);
	const [succsess, setSuccsess] = useState(0);
	const arr = [
		{
			question: 'I have ___ apples right now!',
			answer: ['one', 'tree', 'a', 'an'],
			rightAnswer: 'tree',
		},
		{
			question: 'What ___ of letter do you like?',
			answer: ['more', 'kindow', 'sort', 'have'],
			rightAnswer: 'sort',
		},
		{
			question: 'I ___ two beer please! Give me it please',
			answer: ['hope', 'want', 'like', 'am'],
			rightAnswer: 'want',
		},
	];

	const answerFunc = (e) => {
		const eTarget = e.target;
		if (eTarget.textContent === arr[iter].rightAnswer) {
			eTarget.classList.add('green');
			setSuccsess(succsess + 1);
			setTimeout(() => {
				setIter(iter + 1);
				eTarget.classList.remove('green');
			}, 1500);
		} else {
			e.target.classList.add('danger');
			setError(error + 1);
			setTimeout(() => {
				eTarget.classList.remove('danger');
			}, 1000);
		}
	};

	if (arr[iter] !== undefined) {
		return (
			<div className={css.container}>
				<div className={css.error}>Error: {error}</div>
				<div className={css.succsess}>Seccsess: {succsess}</div>
				<div className={css.block}>
					<h4>{arr[iter].question}</h4>
					<div className={css.cardEng}>
						{arr[iter].answer.map((item, index) => {
							return (
								<div className={css.answer} onClick={answerFunc}>
									{item}
								</div>
							);
						})}
					</div>
				</div>
			</div>
		);
	} else {
		return (
			<div className={css.container}>
				<div className={css.block}>
					{succsess > error ? (
						<div
							className={css.succsessEnd}
						>{`Отлично. Ваш результат: ${succsess}. А ошибок всего: ${error} Смело езжайте в путешествие)`}</div>
					) : (
						<div
							className={css.errorEnd}
						>{`Неплохо. Но нужно немного подучить. Ошибок: ${error}. А правильных ответов: ${succsess}`}</div>
					)}
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {};
};

export default connect(mapStateToProps, null)(English);
