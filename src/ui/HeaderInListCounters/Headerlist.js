import React from 'react';
import css from './Headerlist.module.css';
import { Link } from 'react-scroll';
import { NavLink } from 'react-router-dom';

const HeaderList = () => {
	return (
		<div className={false ? css.blockBottom : css.block}>
			<div className={false ? css.ref : css.nav}>
				{false ? (
					<Link
						activeClass='active'
						duration={50}
						to='home'
						className={css.default}
						spy={true}
						smooth={true}
					>
						Домой
					</Link>
				) : null}

				<NavLink className={css.default} to='/'>
					Назад
				</NavLink>

				<Link
					activeClass='active'
					duration={50}
					to='listCountru'
					spy={true}
					className={css.default}
					smooth={true}
				>
					Теплые страны
				</Link>

				<Link
					activeClass='active'
					duration={50}
					to='conv'
					className={css.default}
					spy={true}
					smooth={true}
				>
					Холодные страны
				</Link>
				<Link
					activeClass='active'
					duration={50}
					to='map'
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
