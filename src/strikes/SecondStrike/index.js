import axios from 'axios';
import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { CMS_API_URL, CMS_API_TOKEN} from '../../configs';
import { secondStrike } from '../../tools/api';
import InputType from '../../components/InputType';

const title = 'Just in case.'
const subtitle = 'Please provide an emergency contact'
const previous = '/'
const next = '/10SS-5'
const questions = [
	{
		'label':'Contact Name',
		'placeholder':'Please Input Your Email'
	},
	{
		'label': 'Contact Phone Number',
		'placeholder':'Please Input Your Full Name'
	}
]

export function SecondStrike(props){
	const [intakeQuestions, setIntakeQuestions] = useState([]);

	async function getQuestions(){
		// const res = await axios.get(
	 //      `${CMS_API_URL}${secondStrike}?token=${CMS_API_TOKEN}`,
	 //    );

	 //    setIntakeQuestions(res.data.questions);
		setIntakeQuestions(questions);
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
		    previous={previous}
		    updateState={onChange}
		/>
	);
}

export default connect(state => ({
	...state
}), {})(SecondStrike)