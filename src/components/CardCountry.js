import React from 'react';
import { NavLink } from 'react-router-dom';
import css from './CardCountry.module.css';

import { connect } from 'react-redux';
import { getId } from '../redux/actions/action';

const CardCountry = ({ arrCountry, getId, idCard }) => {
	const event = (e) => {
		getId(e.currentTarget.id);
	};

	return (
		<div className={css.cardBlock}>
			{arrCountry.map((country, index) => {
				return (
					<div className={css.card} id={index} key={index} onClick={event}>
						<NavLink to={idCard ? '/' : null} className={css.navLink}>
							<>
								<div className={css.card__Img}>
									<img src={country.cardImg} alt='' />
								</div>

								<div className={css.discribe__country}>
									<b>{country.name}</b>
									<i>{country.cardImgDescribe}</i>
								</div>
							</>
						</NavLink>
					</div>
				);
			})}
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
