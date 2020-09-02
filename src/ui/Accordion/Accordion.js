import React from 'react';

import css from './Accordion.module.css';

import { connect } from 'react-redux';
import { getIdModalImg } from '../../redux/actions/action';

function Accordion({ accordion, getIdModalImg }) {
	const clickOnImgAccordeon = (e) => {
		getIdModalImg(e.target.id);
	};

	return (
		<div>
			<div className={css.wraper}>
				<ul className={css.accordion}>
					{accordion.map((img, index) => {
						return (
							<li key={Math.random()} onClick={clickOnImgAccordeon}>
								<img src={img} alt='' id={index} />
							</li>
						);
					})}
				</ul>
			</div>
		</div>
	);
}

const mapStateToProps = (state) => {
	return {};
};
const mapDispatchToProps = (dispatch) => {
	return {
		getIdModalImg: (num) => dispatch(getIdModalImg(num)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Accordion);
