import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import css from './Header.module.css';

import { connect } from 'react-redux';

import { Link } from 'react-scroll';

function Header({ idCard }) {
	const [bool, setBool] = useState(false);

	window.addEventListener('scroll', () => {
		if (window.scrollY > (document.documentElement.clientHeight / 10) * 9) {
			setBool(true);
		} else {
			setBool(false);
		}
	});

	return (
		<div className={bool ? css.blockBottom : css.block}>
			<div className={bool ? css.ref : css.nav}>
				<div className={css.blockLogo}>
					<p className={css.logo}>LOGO</p>
				</div>

				{bool ? (
					<Link
						activeClass='active'
						duration={50}
						to='home'
						className={idCard ? css.default : css.noActive}
						spy={true}
						smooth={true}
					>
						Домой
					</Link>
				) : null}

				<NavLink className={css.default} to='/allCountrys'>
					Все страны
				</NavLink>

				<Link
					activeClass='active'
					duration={50}
					to='listCountru'
					className={idCard ? css.default : css.noActive}
					spy={true}
					smooth={true}
				>
					{idCard ? 'Города в "Исландия"' : 'Города в "?"'}
				</Link>

				<Link
					activeClass='active'
					duration={50}
					to='conv'
					className={idCard ? css.default : css.noActive}
					spy={true}
					smooth={true}
				>
					Конвертер
				</Link>
				<Link
					activeClass='active'
					duration={50}
					to='map'
					className={idCard ? css.default : css.noActive}
					spy={true}
					smooth={true}
				>
					Карта
				</Link>
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
