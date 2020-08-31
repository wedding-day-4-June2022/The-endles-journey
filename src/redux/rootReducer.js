import { combineReducers } from 'redux';
import { countrysReducer } from './reducers/countresReducer';
import { cardReducer } from './reducers/cardReducer';

export default combineReducers({
	countrysReducer,
	cardReducer,
});
