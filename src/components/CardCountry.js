import React, { useEffect, useState } from 'react';
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
	const [iterUSA, setIterUSA] = useState(null);
	const [iterAFR, setIterAFR] = useState(null);
	const [iterEU, setIterEU] = useState(null);
	const [iterAZ, setIterAZ] = useState(null);
	const [iterOUR, setIterOUR] = useState(null);

	const [changeItemUSA, setChangeIconUSA] = useState(false);
	const [changeItemAFR, setChangeIconAFR] = useState(false);
	const [changeItemEU, setChangeIconEU] = useState(false);
	const [changeItemAZ, setChangeIconAZ] = useState(false);
	const [changeItemOUR, setChangeIconOUR] = useState(false);

	useEffect(() => {
		window.scrollTo(0, 0);
	});

	// const itemQuery = document.querySelector('.CardCountry_euro__15s7n'); // end

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
														<div
															className={iterUSA ? css.animationMy : css.sea}
														>
															{changeItemUSA ? (
																'Страна сохранена'
															) : (
																<> Сохранение удалено &#128274;</>
															)}
														</div>
													</div>

													<div
														className={css.icon}
														onClick={(e) => {
															e.preventDefault();
															e.stopPropagation();
															getNameCountry(country.name);

															if (!e.target.classList.contains('success')) {
																e.target.classList.add('success');
																setChangeIconUSA(true);
															} else {
																e.target.classList.remove('success');
																setChangeIconUSA(false);
															}

															setIterUSA(true);
															setTimeout(() => {
																setIterUSA(false);
															}, 1000);
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
														<div
															className={iterAFR ? css.animationMy : css.sea}
														>
															{changeItemAFR ? (
																'Страна сохранена'
															) : (
																<> Сохранение удалено &#128274;</>
															)}
														</div>
													</div>
													<div
														className={css.icon}
														onClick={(e) => {
															e.preventDefault();
															e.stopPropagation();
															getNameCountry(country.name);
															if (!e.target.classList.contains('success')) {
																e.target.classList.add('success');
																setChangeIconAFR(true);
															} else {
																e.target.classList.remove('success');
																setChangeIconAFR(false);
															}

															setIterAFR(true);
															setTimeout(() => {
																setIterAFR(false);
															}, 1000);
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
														<div className={iterEU ? css.animationMy : css.sea}>
															{changeItemEU ? (
																'Страна сохранена'
															) : (
																<> Сохранение удалено &#128274;</>
															)}
														</div>
													</div>
													<div
														className={css.icon}
														onClick={(e) => {
															e.preventDefault();
															e.stopPropagation();
															getNameCountry(country.name);
															if (!e.target.classList.contains('success')) {
																e.target.classList.add('success');
																setChangeIconEU(true);
															} else {
																e.target.classList.remove('success');
																setChangeIconEU(false);
															}

															setIterEU(true);
															setTimeout(() => {
																setIterEU(false);
															}, 1000);
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
														<div className={iterAZ ? css.animationMy : css.sea}>
															{changeItemAZ ? (
																'Страна сохранена'
															) : (
																<> Сохранение удалено &#128274;</>
															)}
														</div>
													</div>
													<div
														className={css.icon}
														onClick={(e) => {
															e.preventDefault();
															e.stopPropagation();
															getNameCountry(country.name);
															if (!e.target.classList.contains('success')) {
																e.target.classList.add('success');
																setChangeIconAZ(true);
															} else {
																e.target.classList.remove('success');
																setChangeIconAZ(false);
															}

															setIterAZ(true);
															setTimeout(() => {
																setIterAZ(false);
															}, 1000);
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
														<div
															className={iterOUR ? css.animationMy : css.sea}
														>
															{changeItemOUR ? (
																'Страна сохранена'
															) : (
																<> Сохранение удалено &#128274;</>
															)}
														</div>
													</div>
													<div
														className={css.icon}
														onClick={(e) => {
															e.preventDefault();
															e.stopPropagation();
															getNameCountry(country.name);
															if (!e.target.classList.contains('success')) {
																e.target.classList.add('success');
																setChangeIconOUR(true);
															} else {
																e.target.classList.remove('success');
																setChangeIconOUR(false);
															}

															setIterOUR(true);
															setTimeout(() => {
																setIterOUR(false);
															}, 1000);
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
