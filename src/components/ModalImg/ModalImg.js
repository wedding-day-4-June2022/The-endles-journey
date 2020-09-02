import React from 'react';

import css from './ModalImg.module.css';

import { connect } from 'react-redux';
import { getIdModalImg } from '../../redux/actions/action';

function ModalImg({
	closeFuncModalImg,
	arrCountry,
	idCard,
	idSity,
	idSityAttraction,
	idModalImg,
}) {
	const closeModal = (e) => {
		closeFuncModalImg(false);
	};

	const clickOnArrow = (e) => {
		e.stopPropagation();

		if (e.target.id === 'left') {
			console.log('hello');
		}
	};

	const img =
		arrCountry[idCard].sities[idSity].attractions[idSityAttraction].accordion[
			idModalImg
		];

	return (
		<div className={css.block} onClick={closeModal}>
			<div className={css.blockImgShow} onClick={(e) => e.stopPropagation()}>
				<img src={img} alt='' className={css.imgModal} />
			</div>
			<div className={css.leftBlock} onClick={clickOnArrow} id={'left'}>
				&#60;
			</div>
			<div className={css.rightBlock} onClick={clickOnArrow} id={'right'}>
				{' '}
				&#62;
			</div>
		</div>
	);
}

const mapStateToProps = (state) => {
	return {
		arrCountry: state.countresReducer,
		idCard: state.cardReducer.idCard,
		idSity: state.cardReducer.idSity,
		idSityAttraction: state.cardReducer.idSityAttraction,
		idModalImg: state.cardReducer.idModalImg,
	};
};
const mapDispatchToProps = (dispatch) => {
	return {
		closeFuncModalImg: (num) => dispatch(getIdModalImg(num)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalImg);
