import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import css from './CardCountry.module.css';

import { connect } from 'react-redux';
import { add_countres_arr, getId, getSity } from '../redux/actions/action';

import HeaderList from '../ui/HeaderInListCounters/Headerlist';

const CardCountry = ({
	arrCountry,
	getId,
	idCard,
	getSity,
	getNameCountry,
}) => {
	const event = (e) => {
		if (e.currentTarget.id !== idCard) {
			getSity(null);
		}

		getId(e.currentTarget.id);
	};

	useEffect(() => {
		window.scrollTo(0, 0);
	});

	return (
		<>
			<HeaderList />
			<div className={css.pageBlock}>
				<div id='usa'>
					<h3>Америка</h3>

					<div className={css.cardBlock}>
						{arrCountry.map((country, index) => {
							return (
								<div key={index + 'usa'} className={css.marginCard}>
									{country.partOfTheWorld === 'usa' ? (
										<div className={css.card} id={index} onClick={event}>
											<NavLink to={idCard ? '/' : null} className={css.navLink}>
												<>
													<div className={css.card__Img}>
														<img src={country.cardImg} alt='' />
													</div>
													<div
														className={css.icon}
														onClick={(e) => {
															e.preventDefault();
															e.stopPropagation();
															getNameCountry(country.name);
															e.target.classList.toggle('success');
														}}
														title='Добавление страны в "Просмотреть позже"'
													>
														{' '}
														&#10031;{' '}
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
									) : null}
								</div>
							);
						})}
					</div>
				</div>

				<div id='afrika'>
					<h3> Африка</h3>
					<div className={css.euro}>
						{arrCountry.map((country, index) => {
							return (
								<div key={index + 'afrika'} className={css.marginCard}>
									{country.partOfTheWorld === 'afrika' ? (
										<div
											className={`${css.card} ${css.afr}`}
											id={index}
											onClick={event}
										>
											<NavLink to={idCard ? '/' : null} className={css.navLink}>
												<>
													<div className={css.card__Img}>
														<img src={country.cardImg} alt='' />
													</div>
													<div
														className={css.icon}
														onClick={(e) => {
															e.preventDefault();
															e.stopPropagation();
															getNameCountry(country.name);
															e.target.classList.toggle('success');
														}}
														title='Добавление страны в "Просмотреть позже"'
													>
														{' '}
														&#10031;{' '}
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
									) : null}
								</div>
							);
						})}
					</div>
				</div>
				<div id='euro'>
					<h3>Европпа</h3>
					<div className={css.euro}>
						{arrCountry.map((country, index) => {
							return (
								<div key={index + 'europa'} className={css.marginCard}>
									{country.partOfTheWorld === 'euro' ? (
										<div
											className={`${css.card} ${css.evr}`}
											id={index}
											onClick={event}
										>
											<NavLink to={idCard ? '/' : null} className={css.navLink}>
												<>
													<div className={css.card__Img}>
														<img src={country.cardImg} alt='' />
													</div>
													<div
														className={css.icon}
														onClick={(e) => {
															e.preventDefault();
															e.stopPropagation();
															getNameCountry(country.name);
															e.target.classList.toggle('success');
														}}
														title='Добавление страны в "Просмотреть позже"'
													>
														{' '}
														&#10031;{' '}
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
									) : null}
								</div>
							);
						})}
					</div>
				</div>
				<div id='azia'>
					<h3>Азия</h3>
					<div className={css.euro}>
						{arrCountry.map((country, index) => {
							return (
								<div key={index + 'azia'} className={css.marginCard}>
									{country.partOfTheWorld === 'azia' ? (
										<div className={css.card} id={index} onClick={event}>
											<NavLink to={idCard ? '/' : null} className={css.navLink}>
												<>
													<div className={css.card__Img}>
														<img src={country.cardImg} alt='' />
													</div>
													<div
														className={css.icon}
														onClick={(e) => {
															e.preventDefault();
															e.stopPropagation();
															getNameCountry(country.name);
															e.target.classList.toggle('success');
														}}
														title='Добавление страны в "Просмотреть позже"'
													>
														{' '}
														&#10031;{' '}
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
									) : null}
								</div>
							);
						})}
					</div>
				</div>
				<div id='topDays'>
					<h3>Нашя подборка на сегодня</h3>
					<div className={css.euro}>
						{arrCountry.map((country, index) => {
							return (
								<div key={index + 'azia'} className={css.marginCard}>
									{country.partOfTheWorld === 'azia' ? (
										<div className={css.card} id={index} onClick={event}>
											<NavLink to={idCard ? '/' : null} className={css.navLink}>
												<>
													<div className={css.card__Img}>
														<img src={country.cardImg} alt='' />
													</div>
													<div
														className={css.icon}
														onClick={(e) => {
															e.preventDefault();
															e.stopPropagation();
															getNameCountry(country.name);
															e.target.classList.toggle('success');
														}}
														title='Добавление страны в "Просмотреть позже"'
													>
														{' '}
														&#10031;{' '}
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
									) : null}
								</div>
							);
						})}
					</div>
				</div>
			</div>

			<div style={{ width: '100%', height: '100vh' }} id='maplist'>
				<iframe
					src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47417628.433981776!2d-55.6342618348318!3d43.49936566641007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48d22b52a3eb6043%3A0x6f8a0434e5c1459a!2z0JjRgdC70LDQvdC00LjRjw!5e0!3m2!1sru!2sby!4v1601834962386!5m2!1sru!2sby'
					width='99.72%'
					height='100%'
					title={new Date().getMilliseconds()}
					aria-hidden='false'
				></iframe>
			</div>
		</>
	);
};

const mapStateToProps = (state) => {
	console.log(state, 'state');
	return {
		arrCountry: state.countresReducer,
		idCard: state.cardReducer,
	};
};
const mapDispatchToProps = (dispatch) => {
	return {
		getId: (num) => dispatch(getId(num)),
		getSity: (num) => dispatch(getSity(num)),
		getNameCountry: (str) => dispatch(add_countres_arr(str)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(CardCountry);
