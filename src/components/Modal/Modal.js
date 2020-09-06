import React from 'react';

import css from './Modal.module.css';
import { connect } from 'react-redux';
import { getAttraction } from '../../redux/actions/action';

import Accordion from '../../ui/Accordion/Accordion';
import Map from '../../ui/Map/Map';

function Modal({
	isAttractionFunc,
	modalSity,
	idCard,
	idSity,
	idCityAttraction,
}) {
	const closeModal = (e) => {
		isAttractionFunc(false);
		document.body.style.overflow = 'auto';
	};

	const modal = modalSity[idCard].sities[idSity].attractions[idCityAttraction];
	return (
		<div className={css.blockAbsolute} onClick={closeModal}>
			<img
				src={'https://emojio.ru/images/apple-b/274c.png'}
				alt=''
				className={css.imgClose}
			/>
			<div className={css.blockContent} onClick={(e) => e.stopPropagation()}>
				<div className={css.blockOneFlex}>
					<div className={css.blockImg}>
						<img src={modal.modal[0].imgDescribeSity} alt='' />
					</div>
					<div className={css.blockP}>
						<p>{modal.modal[0].describeSity}</p>
					</div>
				</div>

				<div className={css.blockOneFlex}>
					<div className={css.blockP}>
						<p>{modal.modal[1].describeSity}</p>
					</div>
					<div className={css.blockImg}>
						<img src={modal.modal[1].imgDescribeSity} alt='' />
					</div>
				</div>

				<div className={css.blockOneFlex}>
					<div className={css.blockImg}>
						<img src={modal.modal[2].imgDescribeSity} alt='' />
					</div>
					<div className={css.blockP}>
						<p>{modal.modal[2].describeSity}</p>
					</div>
				</div>
				<h2>Больше картинок:</h2>
				<Accordion accordion={modal.accordion} />
				<Map
					mapOfModal={
						modalSity[idCard].sities[idSity].attractions[idCityAttraction]
							.mapOfModal
					}
				/>
			</div>
		</div>
	);
}

const mapStateToProps = (state) => {
	return {
		modalSity: state.countresReducer,
		idCard: state.cardReducer.idCard,
		idSity: state.cardReducer.idSity,
		idCityAttraction: state.cardReducer.idSityAttraction,
	};
};
const mapDispatchToProps = (dispatch) => {
	return {
		isAttractionFunc: (num) => dispatch(getAttraction(num)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
