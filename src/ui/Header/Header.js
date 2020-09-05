import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from './logo.png';

import css from './Header.module.css';

import { connect } from 'react-redux';

function Header({ idCard }) {
	const [bool, setBool] = useState(false);

	window.addEventListener('scroll', (e) => {
		if (window.scrollY > (document.documentElement.clientHeight / 10) * 9) {
			setBool(true);
		}
		if (window.scrollY < (document.documentElement.clientHeight / 10) * 9) {
			setBool(false);
		}
	});

	return (
		<div className={bool ? css.blockBottom : css.block}>
			<div className={bool ? css.ref : css.nav}>
				<div className={css.blockLogo}>
					<img src={logo} alt='' className={css.logo} />
				</div>

				<a href='#home' className={idCard ? css.default : css.noActive}>
					Домой
				</a>

				<NavLink to='/allCountrys' className={css.default}>
					Все страны
				</NavLink>
				<a href='#list' className={idCard ? css.default : css.noActive}>
					{idCard ? 'Города в "Исландия"' : 'Города в "?"'}
				</a>
				<a href='#about' className={idCard ? css.default : css.noActive}>
					Карта
				</a>
			</div>
		</div>
	);
}

const mapStateToProps = (state) => {
	return {
		idCard: state.cardReducer.idCard,
	};
};

export default connect(mapStateToProps, null)(Header);
