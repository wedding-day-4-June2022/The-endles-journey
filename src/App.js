import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './App.css';

import { connect } from 'react-redux';
import { getAttraction } from './redux/actions/action';

import { Route } from 'react-router-dom';

import ListCountrys from './ui/ListCountrys/ListCountrys';
import Main from './pages/Main';
import Modal from './components/Modal/Modal';
import ModalImg from './components/ModalImg/ModalImg';

const App = ({ isAttraction, idModalImg }) => {
	return (
		<div className='block'>
			{isAttraction
				? ReactDOM.createPortal(<Modal />, document.getElementById('portal'))
				: null}

			{idModalImg
				? ReactDOM.createPortal(
						<ModalImg />,
						document.getElementById('portalImg')
				  )
				: null}

			<Route exact path={'/'} component={Main} />
			<Route path='/allCountrys' component={ListCountrys} />
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		isAttraction: state.cardReducer.isAttraction,
		idModalImg: state.cardReducer.idModalImg,
	};
};
const mapDispatchToProps = (dispatch) => {
	return {
		isAttractionFunc: (num) => dispatch(getAttraction(num)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
