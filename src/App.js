import React from 'react';

import { connect } from 'react-redux';
import './App.css';

import { Route } from 'react-router-dom';

import ListCountrys from './ui/ListCountrys/ListCountrys';
import Main from './pages/Main';

const App = () => {
	return (
		<div className='block'>
			<Route exact path={'/'} component={Main} />
			<Route path='/allCountrys' component={ListCountrys} />
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		item: state.countresReducer,
	};
};

export default connect(mapStateToProps, null)(App);
