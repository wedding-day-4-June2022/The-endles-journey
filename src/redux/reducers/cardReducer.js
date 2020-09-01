import { CARD, SITY, ATTRACTION, CITY_ATTRACTION } from '../actions/actionType';

const initialState = {
	idCard: false,
	idSity: false,
	isAttraction: false,
	idSityAttraction: false,
};

export function cardReducer(state = initialState, action) {
	switch (action.type) {
		case CARD:
			return {
				idCard: (state.idCard = action.payload),
				idSity: state.idSity,
				isAttraction: state.isAttraction,
				idSityAttraction: state.idSityAttraction,
			};
		case SITY:
			return {
				idSity: (state.idSity = action.payload),
				idCard: state.idCard,
				isAttraction: state.isAttraction,
				idSityAttraction: state.idSityAttraction,
			};
		case ATTRACTION:
			return {
				idSity: state.idSity,
				idCard: state.idCard,
				isAttraction: (state.isAttraction = action.payload),
				idSityAttraction: state.idSityAttraction,
			};
		case CITY_ATTRACTION:
			return {
				idSity: state.idSity,
				idCard: state.idCard,
				isAttraction: state.isAttraction,
				idSityAttraction: (state.idSityAttraction = action.payload),
			};

		default:
			return state;
	}
}
