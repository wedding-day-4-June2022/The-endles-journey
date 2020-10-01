import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import css from './Header.module.css';

import { connect } from 'react-redux';

function Header({ idCard }) {
	const [bool, setBool] = useState(false);
	const [hash, setHash] = useState(window.location.hash);
	const [activeUrl, setActiveUrl] = useState('#home');
	// let res = document.documentElement.clientHeight * 1.5;

	window.addEventListener('scroll', (e) => {
		if (window.scrollY > (document.documentElement.clientHeight / 10) * 9) {
			setBool(true);
			setActiveUrl('#list');
		}
		if (window.scrollY < (document.documentElement.clientHeight / 10) * 9) {
			setBool(false);
			setActiveUrl('#home');
		}
		// if (window.scrollY > res) {
		// 	setActiveUrl('#about');
		// 	// setBool(false);
		// }
	});

	const func = (e) => {
		if (e.target.getAttribute('href') === '#home') {
			setActiveUrl(e.target.getAttribute('href'));
		}
		if (e.target.getAttribute('href') === '#list') {
			setActiveUrl(e.target.getAttribute('href'));
		}
		if (e.target.getAttribute('href') === '#about') {
			setActiveUrl(e.target.getAttribute('href'));
		}
	};

	return (
		<div className={bool ? css.blockBottom : css.block}>
			<div className={bool ? css.ref : css.nav}>
				<div className={css.blockLogo}>
					<p className={css.logo}>LOGO</p>
				</div>

				<a
					href='#home'
					className={
						idCard
							? activeUrl === '#home'
								? css.activeUrl
								: css.default
							: css.noActive
					}
					onClick={func}
				>
					Домой
				</a>

				<NavLink to='/allCountrys' className={css.default} onClick={func}>
					Все страны
				</NavLink>
				<a
					href='#list'
					className={
						idCard
							? activeUrl === '#list'
								? css.activeUrl
								: css.default
							: css.noActive
					}
					onClick={func}
				>
					{idCard ? 'Города в "Исландия"' : 'Города в "?"'}
				</a>
				<a
					href='#about'
					className={
						idCard
							? activeUrl === '#about'
								? css.activeUrl
								: css.default
							: css.noActive
					}
					onClick={func}
				>
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
