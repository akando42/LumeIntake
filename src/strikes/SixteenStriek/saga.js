import { put, takeLatest} from 'redux-saga/effects';
import { agent, lambda} from '../../tools/agent';
import { firstStrike } from '../../tools/api';
import { allQuestionsLoaded } from './actions';
import * as constants from './constants';

export function getQuestions(){
	try {
		const {data} = agent.get(firstStrike);
		put(allQuestionsLoaded(data));
	} catch(err){
		console.log({err});
	}
}

export default function* firstStrikeSage(){
	takeLatest(constants.LOAD_QUESTIONS_REQUEST, getQuestions);
}
