import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';

import { connect } from 'react-redux';
import { getAttraction } from './redux/actions/action';

import { Route } from 'react-router-dom';

import ListCountrys from './ui/ListCountrys/ListCountrys';
import Main from './pages/Main';
import Modal from './components/Modal/Modal';

const App = ({ isAttraction }) => {
	return (
		<div className='block'>
			{isAttraction
				? ReactDOM.createPortal(<Modal />, document.getElementById('portal'))
				: null}

			<Route exact path={'/'} component={Main} />
			<Route path='/allCountrys' component={ListCountrys} />
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		isAttraction: state.cardReducer.isAttraction,
	};
};
const mapDispatchToProps = (dispatch) => {
	return {
		isAttractionFunc: (num) => dispatch(getAttraction(num)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
