import React from 'react';
import { NavLink } from 'react-router-dom';
import css from './CardCountry.module.css';

function CardCountry() {
	const arr = [
		{
			name: 'italy',
			describe: 'lorem mo right is to no afraid in this home',
		},
		{
			name: 'Roma',
			describe: 'lorem mo right is to no afraid in this home',
		},
		{
			name: 'Belarus',
			describe: 'lorem mo right is to no afraid in this home',
		},
		{
			name: 'History',
			describe: 'lorem mo right is to no afraid in this home',
		},
		{
			name: 'Poland',
			describe: 'lorem mo right is to no afraid in this home',
		},
		{
			name: 'Tohoma',
			describe: 'lorem mo right is to no afraid in this home',
		},
	];
	const event = (e) => {
		console.log(e.currentTarget.id);
	};
	return (
		<div className={css.cardBlock}>
			{arr.map((country, index) => {
				return (
					<div className={css.card} id={index} key={index} onClick={event}>
						<NavLink to='/'>
							<div className={css.hoverEffect}>
								<h2>hello</h2>
								<p>gogogo</p>
							</div>
						</NavLink>
						<NavLink to='/' className={css.navLink}>
							<>
								<div className={css.card__Img}>
									<img
										src='https://i104.fastpic.ru/big/2018/0716/5e/cbdf9a744380903d8e632aca3a56c05e.jpg'
										alt=''
									/>
								</div>

								<div className={css.discribe__country}>
									<b>{country.name}</b>
									<i>{country.describe}</i>
								</div>
							</>
						</NavLink>
					</div>
				);
			})}
		</div>
	);
}

export default CardCountry;
