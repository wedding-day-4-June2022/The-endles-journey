import { CARD, SITY } from './actionType';

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
