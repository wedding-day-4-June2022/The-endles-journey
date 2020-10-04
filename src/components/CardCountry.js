import React from 'react';
import { NavLink } from 'react-router-dom';
import css from './CardCountry.module.css';

import { connect } from 'react-redux';
import { getId } from '../redux/actions/action';

import { useSpring, animated } from 'react-spring';
import HeaderList from '../ui/HeaderInListCounters/Headerlist';

const CardCountry = ({ arrCountry, getId, idCard }) => {
	const event = (e) => {
		getId(e.currentTarget.id);
	};

	const props = useSpring({
		opacity: 1,
		from: { opacity: 0 },
	});

	return (
		<>
			<HeaderList />
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
			<div style={{ width: '100vw', height: '100vh' }}>
				<iframe
					src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47417628.433981776!2d-55.6342618348318!3d43.49936566641007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48d22b52a3eb6043%3A0x6f8a0434e5c1459a!2z0JjRgdC70LDQvdC00LjRjw!5e0!3m2!1sru!2sby!4v1601834962386!5m2!1sru!2sby'
					width='98%'
					height='100%'
					title={new Date().getMilliseconds()}
					aria-hidden='false'
				></iframe>
			</div>
		</>
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
