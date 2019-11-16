import axios from 'axios';
import React, {memo, useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import InputType from '../../components/InputType';
import { CMS_API_URL, CMS_API_TOKEN} from '../../configs';
import { firstStrike } from '../../tools/api';

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

export function FirstStrike(props){
	const [intakeQuestions, setIntakeQuestions] = useState([]);

	async function getQuestions(){
		const res = await axios.get(
	      `${CMS_API_URL}${firstStrike}?token=${CMS_API_TOKEN}`,
	    );
	    console.log("Getting Questions from APIs with responses", res.data.questions);
	    setIntakeQuestions(res.data.questions);
	}
	useEffect(() => {
		getQuestions();
		// loadAllQuestionsRequest();
	}, [])

	function onChange(idx, value) {
		let updatedQuestion = intakeQuestions[idx];
		updatedQuestion.value = value;
		intakeQuestions[idx] = updatedQuestion;

		setIntakeQuestions(intakeQuestions)
	}

	return (
		<InputType
		    questions={intakeQuestions} 
		    title={title}
		    subtitle={subtitle} 
		    next={next}
		    updateState={onChange}
		/>
	);
}



export default connect(state => ({
	...state
}), {})(FirstStrike)