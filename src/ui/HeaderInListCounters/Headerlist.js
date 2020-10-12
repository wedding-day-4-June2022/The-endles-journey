import React, { createRef } from 'react';
import css from './Headerlist.module.css';
import { Link } from 'react-scroll';
import { NavLink } from 'react-router-dom';

const HeaderList = () => {
	return (
		<div className={false ? css.blockBottom : css.block}>
			<div className={false ? css.ref : css.nav}>
				<NavLink className={css.default} to='/'>
					Назад
				</NavLink>

				<Link
					activeClass='active'
					duration={50}
					to='usa'
					spy={true}
					className={css.default}
					smooth={true}
				>
					Страны Америки
				</Link>

				<Link
					activeClass='active'
					duration={50}
					to='afrika'
					className={css.default}
					spy={true}
					smooth={true}
				>
					Страны Африки
				</Link>
				<Link
					activeClass='active'
					duration={50}
					to='euro'
					className={css.default}
					spy={true}
					smooth={true}
				>
					Страны Европпы
				</Link>
				<Link
					activeClass='active'
					duration={50}
					to='azia'
					className={css.default}
					spy={true}
					smooth={true}
				>
					Страны Азии
				</Link>
				<Link
					activeClass='active'
					duration={50}
					to='topDays'
					className={css.default}
					spy={true}
					smooth={true}
				>
					Наша подборка на сегодня
				</Link>
				<Link
					activeClass='active'
					duration={50}
					to='maplist'
					className={css.default}
					spy={true}
					smooth={true}
				>
					Карта мира
				</Link>
			</div>
		</div>
	);
};

export default HeaderList;
