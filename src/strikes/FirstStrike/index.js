import axios from 'axios';
import React, {memo, useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import InputType from '../../components/InputType';
import { CMS_API_URL, CMS_API_TOKEN, LAMBDA_API} from '../../configs';
import { firstStrike } from '../../tools/api';  

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

	async function sendData(){
		const clientData = {
		  "name":intakeQuestions[1].value, 
		  "email":intakeQuestions[0].value,
		  "dob":intakeQuestions[2].value
		}

		const res = await axios.post(
			`${LAMBDA_API}/users-create`,clientData
		);
		localStorage.setItem('clientEmail',res.data.data.email);
	}

	useEffect(() => {
		getPageContent();
	}, [])

	function onChange(idx, value) {
		console.log("First Strike Updating State", idx, value);
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
		    sendData={sendData}
		/>
	);
}

export default FirstStrike