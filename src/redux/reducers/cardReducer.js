import {
	CARD,
	SITY,
	ATTRACTION,
	CITY_ATTRACTION,
	MODAL_IMG,
} from '../actions/actionType';

const initialState = {
	idCard: false,
	idSity: false,
	isAttraction: false,
	idSityAttraction: false,
	idModalImg: false,
};

export function cardReducer(state = initialState, action) {
	switch (action.type) {
		case CARD:
			return {
				idCard: (state.idCard = action.payload),
				idSity: state.idSity,
				isAttraction: state.isAttraction,
				idSityAttraction: state.idSityAttraction,
				idModalImg: state.idModalImg,
			};
		case SITY:
			return {
				idSity: (state.idSity = action.payload),
				idCard: state.idCard,
				isAttraction: state.isAttraction,
				idSityAttraction: state.idSityAttraction,
				idModalImg: state.idModalImg,
			};
		case ATTRACTION:
			return {
				idSity: state.idSity,
				idCard: state.idCard,
				isAttraction: (state.isAttraction = action.payload),
				idSityAttraction: state.idSityAttraction,
				idModalImg: state.idModalImg,
			};
		case CITY_ATTRACTION:
			return {
				idSity: state.idSity,
				idCard: state.idCard,
				isAttraction: state.isAttraction,
				idSityAttraction: (state.idSityAttraction = action.payload),
				idModalImg: state.idModalImg,
			};
		case MODAL_IMG:
			return {
				idSity: state.idSity,
				idCard: state.idCard,
				isAttraction: state.isAttraction,
				idSityAttraction: state.idSityAttraction,
				idModalImg: (state.idModalImg = action.payload),
			};

		default:
			return state;
	}
}
