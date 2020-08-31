import React from 'react';

import css from './CountryDescription.module.css';
import { connect } from 'react-redux';
import { getSity } from '../../redux/actions/action';
import DescriptionCity from '../../components/DescriptionCity/DescriptionCity';

function CountryDescription({ arrCountry, idCard, getIdSity, idSity }) {
	const clickOnSity = (e) => {
		getIdSity(e.target.id);
		console.log(e.target.id);
	};

	return (
		<div className={css.block} id='list'>
			<div className={css.countrys}>
				<div className={css.cityCss}>
					{arrCountry[idCard].sities.map((cityName, index) => {
						return (
							<div key={index} onClick={clickOnSity} id={index}>
								{cityName.name}
							</div>
						);
					})}
				</div>
			</div>

			<div className={css.imgDescription}>
				{arrCountry[idCard].sities.map((cities, index) => {
					return (
						<div
							className={css.blockImgDesc}
							key={Math.random() + Math.random()}
						>
							<div className={css.oneBlockImg}>
								<div className={css.blockImg}>
									<img
										src={
											idSity ? cities.attractions[idSity].imgAttractions : null
										}
										alt=''
									/>
								</div>
								<div className={css.blockP}>
									<p>
										{idSity ? cities.attractions[idSity].nameAttractions : null}
									</p>
								</div>
							</div>

							{/* <DescriptionCity cities={cities} idSity={idSity} /> */}
						</div>
					);
				})}
			</div>
		</div>
	);
}

const mapStateToProps = (state) => {
	return {
		arrCountry: state.countrysReducer,
		idCard: state.cardReducer.idCard,
		idSity: state.cardReducer.idSity,
	};
};
const mapDispatchToProps = (dispatch) => {
	return {
		getIdSity: (num) => dispatch(getSity(num)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(CountryDescription);
