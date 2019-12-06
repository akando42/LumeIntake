import axios from 'axios';
import React, {memo, useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import CustomInputType from '../../components/CustomInputType';
import { CMS_API_URL, CMS_API_TOKEN} from '../../configs';
import { nineStrike } from '../../tools/api'; 

export function NineStrike(props){
	const [intakeQuestions, setIntakeQuestions] = useState([]);
	const [pageTitle, setPageTitle] = useState('');
	const [pageSubtitle, setPageSubtitle] = useState('');
	const [prevPage, setPrevPage] = useState('');
	const [nextPage, setNextPage] = useState('');

	async function getPageContent(){
		const res = await axios.get(
	      `${CMS_API_URL}${nineStrike}?token=${CMS_API_TOKEN}`,
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

	function onChange(idx, value){
		console.log("Submitting value", idx, value);
	}

	return (
		<CustomInputType
			questions={intakeQuestions} 
			title={pageTitle}
			next={nextPage}
			updateState={onChange}
		/>
	);
}

export default NineStrike;