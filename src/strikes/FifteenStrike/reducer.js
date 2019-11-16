import { combineReducers } from 'redux';

import { createLoaderReducers } from '../../tools';
import * as constants from './constants';

const initialState = {
    questions: []
};

const loadReducers = createLoaderReducers({
	requestActions: [constants.LOAD_QUESTIONS_REQUEST, constants.LOAD_QUESTIONS_REQUEST],
	successActions: [constants.LOAD_QUESTIONS_SUCCESS, constants.LOAD_QUESTIONS_SUCCESS],
});

const questionsList = (state = initialState.questionsList, {type, payload}) => {
	switch(type) {
		case constants.LOAD_QUESTIONS_SUCCESS:
		    return [...payload];
		default:
		    return state;
	}
};

export default combineReducers({
	...loadReducers,
	questionsList,
});