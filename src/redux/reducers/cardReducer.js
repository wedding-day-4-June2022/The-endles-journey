import { CARD, SITY } from '../actions/actionType';

const initialState = {
	idCard: false,
	idSity: false,
};

export function cardReducer(state = initialState, action) {
	switch (action.type) {
		case CARD:
			return {
				idCard: (state.idCard = action.payload),
				idSity: state.idSity,
			};
		case SITY:
			return {
				idSity: (state.idSity = action.payload),
				idCard: state.idCard,
			};

		default:
			return state;
	}
}
