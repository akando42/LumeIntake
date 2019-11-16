import axios from 'axios';
import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { CMS_API_URL, CMS_API_TOKEN} from '../../configs';
import { thirdStrike } from '../../tools/api';
import CheckBoxType from '../../components/CheckBoxType';

const title = 'What’s the reason for your visit today?'
const subtitle = 'Please select all that apply'
const previous = '/10SS-4'
const next = '/10SS-6'
const options = [
	{
		id: 1,
	 	content:'JUST CHECKING IT OUT'
	},
	{
		id: 2,
	 	content:'OVERALL WELLNESS',
	},
	{
		id: 3,
	 	content:'TO ADDRESS A SPECIFIC CONCERN'
	}
]

export function ThirdStrike(props){
	const [intakeOptions, setIntakeOptions] = useState([]);

	async function getOptions(){
		// const res = await axios.get(
	 //      `${CMS_API_URL}${thirdStrike}?token=${CMS_API_TOKEN}`,
	 //    );

	 //    setIntakeOptions(res.data.questions);
		setIntakeOptions(options);
	}

	useEffect(() => {
		getOptions();
		// loadAllQuestionsRequest();
	}, [])

	function onChange(idx) {
		let options = Object.assign([], intakeOptions);
		for (let i = 0; i < options.length; i++) {
			if (options[i].id === idx) {
				options[i].value = true;
			} else {
				options[i].value = false;
			}
		}

		setIntakeOptions(options)
	}

	return (
		<CheckBoxType
		    options={options} 
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
}), {})(ThirdStrike)