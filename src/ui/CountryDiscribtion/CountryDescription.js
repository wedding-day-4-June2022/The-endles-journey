import React, { useState } from 'react';
import './h.css';
import css from './CountryDescription.module.css';
import { connect } from 'react-redux';
import {
	getSity,
	getAttraction,
	getSityAttraction,
	changeBoolScrollToTop,
} from '../../redux/actions/action';

function CountryDescription({
	arrCountry,
	idCard,
	getIdSity,
	idSity,
	isAttractionFunc,
	getIdCityAttraction,
	changeBoolScrollToTop,
}) {
	const [eId, setEId] = useState(
		document.getElementsByClassName('CountryDescription_cityNameCss__1pG-v')
	);

	const clickOnSity = (e) => {
		getIdSity(e.target.id);
		changeBoolScrollToTop(false);
		for (let i = 0; i < eId.length; i++) {
			if (eId.item(i).className !== 'acc') {
				eId.item(i).classList.remove('acc');
				setEId(eId.item(e.target.id).classList.add('acc'));
			}
		}

		setEId(
			document.getElementsByClassName('CountryDescription_cityNameCss__1pG-v')
		);
	};

	const changeAttractionFunc = (e) => {
		e.stopPropagation();
		isAttractionFunc(e.target.id);
		getIdCityAttraction(e.target.id);
		document.body.style.overflow = 'hidden';
		changeBoolScrollToTop(false);
	};

	return (
		<div className={css.block} id='listCountru'>
			<div className={css.countrys}>
				<div className={css.cityCss}>
					{arrCountry[idCard].sities.map((cityName, index) => {
						return (
							<div
								data-title={cityName.title}
								key={index + 'hey'}
								onClick={clickOnSity}
								id={index}
								className={css.cityNameCss}
							>
								{cityName.name}
							</div>
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
										<div className={css.describeAttraction} id={index}>
											{cities.describeAttraction}
										</div>
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
		changeBoolScrollToTop: (num) => dispatch(changeBoolScrollToTop(num)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(CountryDescription);
