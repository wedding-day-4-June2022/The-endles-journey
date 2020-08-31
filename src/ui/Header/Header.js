import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from './logo.png';

import css from './Header.module.css';

function Header({ isActive }) {
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
				<a href='#home' className={isActive ? css.noActive : null}>
					Home
				</a>
				<NavLink to='/allCountrys' className={isActive ? css.noActive : null}>
					All countrys
				</NavLink>
				<a href='#list' className={isActive ? css.noActive : null}>
					List
				</a>
				<a href='#about' className={isActive ? css.noActive : null}>
					About us
				</a>
			</div>
		</div>
	);
}

export default Header;
