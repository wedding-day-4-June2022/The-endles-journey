import { combineReducers } from 'redux';
import { countresReducer } from './reducers/countresReducer';
import { cardReducer } from './reducers/cardReducer';
import { otherReducer } from './reducers/otherReducer';

export default combineReducers({
	countresReducer,
	cardReducer,
	otherReducer,
});
