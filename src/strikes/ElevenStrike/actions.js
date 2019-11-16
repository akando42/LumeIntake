import * as constants from './constants'

// Load All Questions
export const loadAllQuestionsRequest = () => ({
	type: constants.LOAD_QUESTIONS_REQUEST,
});

// Load All Questions Successfully
export const allQuestionsLoaded = payload => ({
	type: constants.LOAD_QUESTIONS_SUCCESS, 
	payload,
});