import axios from 'axios';
import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { CMS_API_URL, CMS_API_TOKEN} from '../../configs';
import { fourthStrike } from '../../tools/api';
import CheckBoxType from '../../components/CheckBoxType';

function FourthStrike(props){
	const [intakeOptions, setIntakeOptions] = useState([]);
	const [pageTitle, setPageTitle] = useState('');
	const [pageSubtitle, setPageSubtitle] = useState('');
	const [prevPage, setPrevPage] = useState('');
	const [nextPage, setNextPage] = useState('');

	async function getPageContent(){
		const res = await axios.get(
	      `${CMS_API_URL}${fourthStrike}?token=${CMS_API_TOKEN}`,
	    );
		console.log("Third Strike Data", res.data);
	    setIntakeOptions(res.data.Options);
		setPageTitle(res.data.Title);
		setPageSubtitle(res.data.Subtitle);
		setPrevPage(res.data.Previous);
		setNextPage(res.data.Next);
	}

	useEffect(() => {
		getPageContent()
	}, [])

	function onChange(idx) {
		console.log(idx);
	}

	return (
		<CheckBoxType
		    options={intakeOptions} 
		    title={pageTitle}
		    subtitle={pageSubtitle} 
		    next={nextPage}
		    previous={prevPage}
		    updateState={onChange}
		/>
	);
}

export default FourthStrike