import {
	CARD,
	SITY,
	ATTRACTION,
	CITY_ATTRACTION,
	MODAL_IMG,
	SCROLL_TO_TOP,
} from '../actions/actionType';

const initialState = {
	idCard: false,
	idSity: false,
	isAttraction: false,
	idSityAttraction: false,
	idModalImg: false,
	scrollToTop: true,
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
				scrollToTop: state.scrollToTop,
			};
		case SITY:
			return {
				idSity: (state.idSity = action.payload),
				idCard: state.idCard,
				isAttraction: state.isAttraction,
				idSityAttraction: state.idSityAttraction,
				idModalImg: state.idModalImg,
				scrollToTop: state.scrollToTop,
			};
		case ATTRACTION:
			return {
				idSity: state.idSity,
				idCard: state.idCard,
				isAttraction: (state.isAttraction = action.payload),
				idSityAttraction: state.idSityAttraction,
				idModalImg: state.idModalImg,
				scrollToTop: state.scrollToTop,
			};
		case CITY_ATTRACTION:
			return {
				idSity: state.idSity,
				idCard: state.idCard,
				isAttraction: state.isAttraction,
				idSityAttraction: (state.idSityAttraction = action.payload),
				idModalImg: state.idModalImg,
				scrollToTop: state.scrollToTop,
			};
		case MODAL_IMG:
			return {
				idSity: state.idSity,
				idCard: state.idCard,
				isAttraction: state.isAttraction,
				idSityAttraction: state.idSityAttraction,
				idModalImg: (state.idModalImg = action.payload),
				scrollToTop: state.scrollToTop,
			};
		case SCROLL_TO_TOP:
			return {
				idSity: state.idSity,
				idCard: state.idCard,
				isAttraction: state.isAttraction,
				idSityAttraction: state.idSityAttraction,
				idModalImg: state.idModalImg,
				scrollToTop: (state.scrollToTop = action.payload),
			};

		default:
			return state;
	}
}
