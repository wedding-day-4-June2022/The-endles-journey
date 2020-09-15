import React from 'react';
import { NavLink } from 'react-router-dom';
import css from './CardCountry.module.css';

import { connect } from 'react-redux';
import { getId } from '../redux/actions/action';

import { useSpring, animated } from 'react-spring';

const CardCountry = ({ arrCountry, getId, idCard }) => {
	const event = (e) => {
		getId(e.currentTarget.id);
	};

	const props = useSpring({ opacity: 1, from: { opacity: 0 } });

	return (
		<div className={css.cardBlock}>
			<animated.div style={props}>
				{arrCountry.map((country, index) => {
					return (
						<div className={css.card} id={index} key={index} onClick={event}>
							<NavLink to={idCard ? '/' : null} className={css.navLink}>
								<>
									<div className={css.card__Img}>
										<img src={country.cardImg} alt='' />
									</div>

									<div className={css.discribe__country}>
										<b>{country.name}</b>{' '}
										<div className={css.flagBlock}>
											<img
												src={arrCountry[index].flag}
												alt=''
												className={css.flagImg}
											/>
										</div>
										<i>{country.cardImgDescribe}</i>
									</div>
								</>
							</NavLink>
						</div>
					);
				})}
			</animated.div>
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		arrCountry: state.countresReducer,
		idCard: state.cardReducer,
	};
};
const mapDispatchToProps = (dispatch) => {
	return {
		getId: (num) => dispatch(getId(num)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(CardCountry);
