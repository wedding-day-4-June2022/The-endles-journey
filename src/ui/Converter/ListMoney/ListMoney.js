import React, { useState } from 'react';

import css from './ListMoney.module.css';

function ListMoney() {
	const [bool, setBool] = useState(false);
	const arr = ['eu', 'rub', 'tenge', 4, 5];
	const clickOnInput = () => {
		setBool(!bool);
	};
	return (
		<div className={css.block}>
			<div className={css.blockLeft}>
				<div className={css.blockInput}>
					<input
						type='input'
						placeholder='Колличество валюты'
						className={css.input}
					/>
				</div>
				<div className={css.blockInput}>
					<input
						type='input'
						placeholder='Выберите валюту'
						className={css.input}
						onClick={clickOnInput}
					/>
				</div>
				<ul className={bool ? css.ulBlockShow : css.ulBlockHide}>
					{arr.map((el) => {
						return <li>{el}</li>;
					})}
				</ul>
			</div>
			<div className={css.blockRight}>
				<p>Местные деньги : "Euro"</p>
				<p>После перевода : ""</p>
			</div>
		</div>
	);
}

export default ListMoney;
