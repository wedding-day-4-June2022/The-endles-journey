import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './App.css';

import { connect } from 'react-redux';
import { getAttraction } from './redux/actions/action';

import { Route, Switch } from 'react-router-dom';

import ListCountrys from './ui/ListCountrys/ListCountrys';
import Main from './pages/Main';
import Modal from './components/Modal/Modal';
import ModalImg from './components/ModalImg/ModalImg';
import Other from './pages/Other';
import StartingModalHelper from './ui/StartingModalHelper/StartingModalHelper';

const App = ({ isAttraction, idModalImg }) => {
	const [helper, setHelper] = useState(true);

	return (
		<div className='block'>
			{helper ? <StartingModalHelper setHelper={setHelper} /> : null}

			{isAttraction
				? ReactDOM.createPortal(<Modal />, document.getElementById('portal'))
				: null}

			{idModalImg
				? ReactDOM.createPortal(
						<ModalImg />,
						document.getElementById('portalImg')
				  )
				: null}

			<Switch>
				<Route exact path={'/'} component={() => <Main />} />
				<Route exact path={'/other'} component={() => <Other />} />
			</Switch>
			<Route path='/allCountrys' component={() => <ListCountrys />} />
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
