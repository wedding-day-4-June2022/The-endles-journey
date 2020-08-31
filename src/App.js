import React from 'react';

import './App.css';

import { Route } from 'react-router-dom';

import ListCountrys from './ui/ListCountrys/ListCountrys';
import Main from './pages/Main';

const App = React.memo(() => {
	return (
		<div className='block'>
			<Route exact path={'/'} component={Main} />
			<Route path='/allCountrys' component={ListCountrys} />
		</div>
	);
});

export default App;
