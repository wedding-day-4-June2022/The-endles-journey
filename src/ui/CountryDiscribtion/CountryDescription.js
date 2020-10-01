import React, { useState } from 'react';

import css from './CountryDescription.module.css';
import { connect } from 'react-redux';
import {
	getSity,
	getAttraction,
	getSityAttraction,
} from '../../redux/actions/action';

import { Spring } from 'react-spring/renderprops';

function CountryDescription({
	arrCountry,
	idCard,
	getIdSity,
	idSity,
	isAttractionFunc,
	getIdCityAttraction,
}) {
	const [scroll, setScroll] = useState(false);

	const clickOnSity = (e) => {
		getIdSity(e.target.id);
	};
	window.addEventListener('scroll', () => {
		if (window.scrollY > (document.documentElement.clientHeight / 4) * 2) {
			setScroll(true);
		}
		if (window.scrollY < (document.documentElement.clientHeight / 4) * 2) {
			setScroll(false);
		}
	});

	const changeAttractionFunc = (e) => {
		e.stopPropagation();
		console.log(e.target);
		isAttractionFunc(e.target.id);

		getIdCityAttraction(e.target.id);

		document.body.style.overflow = 'hidden';
	};

	return (
		<div className={css.block} id='list'>
			<div className={css.countrys}>
				<div className={css.cityCss}>
					{arrCountry[idCard].sities.map((cityName, index) => {
						return (
							<>
								{scroll ? (
									<Spring
										from={{ opasity: 0 }}
										to={{ opasity: 1 }}
										reset={true}
										reverse={scroll}
										config={{ duration: '2000' }}
									>
										{(props) => {
											return (
												<div
													style={props}
													data-title={cityName.title}
													key={index}
													onClick={clickOnSity}
													id={index}
													className={css.cityNameCss}
												>
													{cityName.name}
												</div>
											);
										}}
									</Spring>
								) : null}
							</>
						);
					})}
				</div>
			</div>

			<div className={css.imgDescription}>
				{idSity ? (
					arrCountry[idCard].sities[idSity].attractions.map((cities, index) => {
						return (
							<div
								className={css.blockImgDesc}
								key={Math.random() + Math.random()}
								onClick={changeAttractionFunc}
							>
								<div className={css.oneBlockImg}>
									<div className={css.blockImg} id={index}>
										<img src={cities.imgAttractions} alt='' id={index} />
									</div>
									<div className={css.blockP}>
										<p className={css.nameAttraction} id={index}>
											{cities.nameAttractions}
										</p>
										<p className={css.describeAttraction} id={index}>
											{cities.describeAttraction}
										</p>
									</div>
								</div>
							</div>
						);
					})
				) : (
					<div className={css.divText}>
						<h3>Выберите город, и тут появятся его достопримичательности =)</h3>
					</div>
				)}
			</div>
		</div>
	);
}

const mapStateToProps = (state) => {
	return {
		arrCountry: state.countresReducer,
		idCard: state.cardReducer.idCard,
		idSity: state.cardReducer.idSity,
	};
};
const mapDispatchToProps = (dispatch) => {
	return {
		getIdSity: (num) => dispatch(getSity(num)),
		isAttractionFunc: (num) => dispatch(getAttraction(num)),
		getIdCityAttraction: (num) => dispatch(getSityAttraction(num)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(CountryDescription);
