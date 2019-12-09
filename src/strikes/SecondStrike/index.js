import axios from 'axios';
import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { CMS_API_URL, CMS_API_TOKEN, LAMBDA_API} from '../../configs';
import { secondStrike } from '../../tools/api';
import InputType from '../../components/InputType';

export function SecondStrike(props){
	const [intakeQuestions, setIntakeQuestions] = useState([]);
	const [pageTitle, setPageTitle] = useState('');
	const [pageSubtitle, setPageSubtitle] = useState('');
	const [prevPage, setPrevPage] = useState('');
	const [nextPage, setNextPage] = useState('');

	async function getPageContent(){
		const res = await axios.get(
	      `${CMS_API_URL}${secondStrike}?token=${CMS_API_TOKEN}`,
	    );
	    console.log("Getting Questions from APIs with responses", res.data);
	    setIntakeQuestions(res.data.Questions);
	    setPageTitle(res.data.Title);
	    setPageSubtitle(res.data.Subtitle);
	    setPrevPage(res.data.Previous);
	    setNextPage(res.data.Next);
	}

	async function updateData(){
		const clientData = {
			"emergencyContactName":intakeQuestions[0].value,
			"emergencyContactNumber":intakeQuestions[1].value
		}

		const clientEmail = localStorage.getItem('clientEmail');

		const res = await axios.post(
			`${LAMBDA_API}/users-create`,{
				"email":clientEmail,
				"user_details":clientData
			}
		);
		console.log(res);
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
		    subtitle={pageSubtitle} 
		    next={nextPage}
		    previous={prevPage}
		    updateState={onChange}
		/>
	);
}

export default SecondStrike