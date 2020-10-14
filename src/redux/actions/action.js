import {
	CARD,
	SITY,
	ATTRACTION,
	CITY_ATTRACTION,
	MODAL_IMG,
	SCROLL_TO_TOP,
} from './actionType';

export const getId = (num) => {
	return {
		type: CARD,
		payload: num,
	};
};
export const getSity = (num) => {
	return {
		type: SITY,
		payload: num,
	};
};
export const getAttraction = (num) => {
	return {
		type: ATTRACTION,
		payload: num,
	};
};
export const getSityAttraction = (num) => {
	return {
		type: CITY_ATTRACTION,
		payload: num,
	};
};
export const getIdModalImg = (num) => {
	return {
		type: MODAL_IMG,
		payload: num,
	};
};
export const changeBoolScrollToTop = (num) => {
	return {
		type: SCROLL_TO_TOP,
		payload: num,
	};
};
