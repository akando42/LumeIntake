import axios from 'axios';
import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { CMS_API_URL, CMS_API_TOKEN} from '../../configs';
import { fourteenStrike } from '../../tools/api';
import LargeTextForm from '../../components/LargeTextForm';

export function FourteenStrike(props){
	const [intakeQuestions, setIntakeQuestions] = useState([]);
	const [pageTitle, setPageTitle] = useState('');
	const [pageSubtitle, setPageSubtitle] = useState('');
	const [prevPage, setPrevPage] = useState('');
	const [nextPage, setNextPage] = useState('');

	async function getPageContent(){
		const res = await axios.get(
	      `${CMS_API_URL}${fourteenStrike}?token=${CMS_API_TOKEN}`,
	    );
	    console.log("Getting Questions from APIs with responses", res.data);
	    setIntakeQuestions(res.data.Questions);
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
		<LargeTextForm
		    questions={intakeQuestions} 
		    title={pageTitle}
		    subtitle={pageSubtitle} 
		    next={nextPage}
		    previous={prevPage}
		    updateState={onChange}
		/>
	);
}

export default FourteenStrike