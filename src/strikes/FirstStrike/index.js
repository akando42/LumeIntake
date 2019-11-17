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

export function FirstStrike(props){
	const [intakeQuestions, setIntakeQuestions] = useState([]);
	const [pageTitle, setPageTitle] = useState('');
	const [pageSubtitle, setPageSubtitle] = useState('');
	const [prevPage, setPrevPage] = useState('');
	const [nextPage, setNextPage] = useState('');

	async function getPageContent(){
		const res = await axios.get(
	      `${CMS_API_URL}${firstStrike}?token=${CMS_API_TOKEN}`,
	    );
	    console.log("Getting Questions from APIs with responses", res.data);
	    setIntakeQuestions(res.data.questions);
	    setPageTitle(res.data.Title);
	    setPageSubtitle(res.data.Subtitle);
	    setPrevPage(res.data.Previous);
	    setNextPage(res.data.Next);
	}

	useEffect(() => {
		getPageContent();
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
		    title={pageTitle}
		    next={nextPage}
		    updateState={onChange}
		/>
	);
}



export default connect(state => ({
	...state
}), {})(FirstStrike)