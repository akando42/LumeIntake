import axios from 'axios';
import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { CMS_API_URL, CMS_API_TOKEN} from '../../configs';
import { thirdStrike } from '../../tools/api';
import CheckBoxType from '../../components/CheckBoxType';

// const title = 'What’s the reason for your visit today?'
// const subtitle = 'Please select all that apply'
// const previous = '/10SS-4'
// const next = '/10SS-6'
// const options = [
// 	{
// 		id: 1,
// 	 	content:'JUST CHECKING IT OUT'
// 	},
// 	{
// 		id: 2,
// 	 	content:'OVERALL WELLNESS',
// 	},
// 	{
// 		id: 3,
// 	 	content:'TO ADDRESS A SPECIFIC CONCERN'
// 	}
// ]

export function ThirdStrike(props){
	const [intakeOptions, setIntakeOptions] = useState([]);
	const [pageTitle, setPageTitle] = useState('');
	const [pageSubtitle, setPageSubtitle] = useState('');
	const [prevPage, setPrevPage] = useEffect('');
	const [nextPage, setNextPage] = useEffect('');

	async function getPageContent(){
		const res = await axios.get(
	      `${CMS_API_URL}${thirdStrike}?token=${CMS_API_TOKEN}`,
	    );
		console.log("Third Strike Data", res.data);
	    setIntakeOptions(res.data.options);
		setPageTitle(res.data.title);
		setPageSubtitle(res.data.subtitle);
		setPrevPage(res.data.previous);
		setNextPage(res.data.next);
	}

	useEffect(() => {
		getPageContent()
	}, [])

	function onChange(idx) {
		console.log("INTAKE OPTIONS", intakeOptions);
		let options = Object.assign([], intakeOptions);
		for (let i = 0; i < options.length; i++) {
			if (options[i].id === idx) {
				options[i].value = true;
			} else {
				options[i].value = false;
			}
		}

		setIntakeOptions(intakeOptions)
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

export default connect(state => ({
	...state
}), {})(ThirdStrike)