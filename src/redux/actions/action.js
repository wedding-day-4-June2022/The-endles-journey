import { CARD, SITY, ATTRACTION, CITY_ATTRACTION } from './actionType';

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
