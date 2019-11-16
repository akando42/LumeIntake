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

const title = "Let’s discuss your `Feels` "
const subtitle = 'Please move the slider to best reflect your'
const next = '/10SS-5'
const questions = [
	{
		'label':'Email',
		'placeholder':'Please Input Your Email'
	},
	{
		'label': 'Name',
		'placeholder':'Please Input Your Full Name'
	},
	{
		'label':'DOB',
		'placeholder':'dd/mm/yyyy'
	}
]

export function FirstStrike({loadAllQuestionsRequest}){
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
	


export default FirstStrike;