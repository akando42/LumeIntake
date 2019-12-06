import axios from 'axios';
import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { CMS_API_URL, CMS_API_TOKEN} from '../../configs';
import { fifteenthStrike } from '../../tools/api';

import SignatureType from '../../components/SignatureType';

export function FifteenStrike({loadAllQuestionsRequest}){
	const [intakeQuestions, setIntakeQuestions] = useState([]);
	const [agreement, setAgreement]=useState({});
	const [pageTitle, setPageTitle] = useState('');
	const [pageSubtitle, setPageSubtitle] = useState('');
	const [prevPage, setPrevPage] = useState('');
	const [nextPage, setNextPage] = useState('');

	async function getPageContent(){
		const res = await axios.get(
	      `${CMS_API_URL}${fifteenthStrike}?token=${CMS_API_TOKEN}`,
	    );
	    console.log("Getting Questions from APIs with responses", res.data);

	    setPageTitle(res.data.Title);
	    setPageSubtitle(res.data.Subtitle);
	    setIntakeQuestions(res.data.Questions);
	    setAgreement(res.data.Document);
	    setPrevPage(res.data.Previous);
	    setNextPage(res.data.Next);
	}

	useEffect(() => {
		getPageContent();
	}, [])

	return (
		<SignatureType 
			title={pageTitle}
			previous={prevPage}
			agreement={agreement}
			questions={intakeQuestions}
			next={nextPage}
		/>
	);
}
	


export default FifteenStrike;