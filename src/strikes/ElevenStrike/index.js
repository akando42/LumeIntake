import axios from 'axios';
import React, {memo, useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import InputType from '../../components/InputType';
import { CMS_API_URL, CMS_API_TOKEN} from '../../configs';

import saga from './saga';
import reducer from './reducer';
import { loadAllQuestionsRequest } from './actions';

const title = 'Now let\'s review your medical history'
const subtitle = ''
const previous = '/10SS-10'
const next = '/10SS-12'
const questions = [
	{
		'label':'Please list any known allergies',
		'placeholder':'leave blank if none'
	},
	{
		'label': 'Please list any current or pas medications',
		'placeholder':'leave blank if none'
	},
	{
		'label':'List any vitamins you\'re taking',
		'placeholder':'leave blank if none'
	},
	{
		'label':'Are you prognant or typing?',
		'placeholder':'if yes, please explain'
	}
]

export function ElevenStrike({loadAllQuestionsRequest}){
	const [intakeQuestions, setIntakeQuestions] = useState([]);

	async function getQuestions(){
		const res = await axios.get(
	      CMS_API_URL+'api/singletons/get/first_strike?token='+CMS_API_TOKEN,
	    );
	    console.log("Getting Questions from APIs with responses", res.data.questions);
	    setIntakeQuestions(res.data.questions);
	}
	useEffect(() => {
		getQuestions();
		// loadAllQuestionsRequest();
	}, [])
	return (
		<InputType
		    questions={intakeQuestions} 
		    title={title}
		    subtitle={subtitle} 
		    next={next}
		/>
	);
}
	


export default ElevenStrike;