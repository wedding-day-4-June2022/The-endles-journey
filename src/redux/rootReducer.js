import { combineReducers } from 'redux';
import { countresReducer } from './reducers/countresReducer';
import { cardReducer } from './reducers/cardReducer';

export default combineReducers({
	countresReducer,
	cardReducer,
});
