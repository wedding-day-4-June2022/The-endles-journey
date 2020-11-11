// import React from 'react';
import Island from '../allInfoCountry/euro/Island';
import Egypt from '../allInfoCountry/afrika/Egypt';
import Egypt2Test from '../allInfoCountry/afrika/Egypt';

const initialState = [Island, Egypt, Egypt2Test];

export const countresReducer = (state = initialState, action) => {
	switch (action.type) {
		default:
			return state;
	}
};
